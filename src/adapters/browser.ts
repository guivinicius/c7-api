import { HTTPAdapter, RequestConfig, RequestOptions, HTTPResponse } from './interfaces';

export class BrowserHTTPAdapter implements HTTPAdapter {
  private config: RequestConfig;

  constructor(config: RequestConfig) {
    this.config = config;
  }

  private logDebug(message: string, data?: any) {
    if (this.config.debug) {
      console.log('%c[Commerce7 Debug]:', 'color: #36f', message);
      if (data) {
        console.dir(data, { depth: null });
      }
    }
  }

  private buildURL(endpoint: string, params?: Record<string, any>): string {
    // Ensure endpoint starts with forward slash
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    
    // Create URL without modifying the base URL's path
    const url = new URL(this.config.baseURL);
    url.pathname = url.pathname.replace(/\/$/, '') + normalizedEndpoint;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  async request<T>(options: RequestOptions): Promise<HTTPResponse<T>> {
    const url = this.buildURL(options.endpoint, options.params);

    const headers = new Headers({
      ...this.config.headers,
      'Content-Type': 'application/json',
    });

    if (this.config.auth) {
      const authString = btoa(
        `${this.config.auth.username}:${this.config.auth.password}`
      );
      headers.set('Authorization', `Basic ${authString}`);
    }

    const fetchOptions: RequestInit = {
      method: options.method,
      headers,
      body: options.data ? JSON.stringify(options.data) : undefined,
    };

    this.logDebug('Request:', {
      url,
      method: options.method,
      headers: Object.fromEntries(headers.entries()),
      params: options.params,
      data: options.data
    });

    try {
      const response = await fetch(url, fetchOptions);
      const responseHeaders = Object.fromEntries(response.headers.entries());
      let data;
      
      try {
        data = await response.json();
      } catch (e) {
        data = undefined;
      }

      const result: HTTPResponse = {
        data,
        status: response.status,
        headers: responseHeaders,
      };

      this.logDebug('Response:', {
        status: result.status,
        headers: result.headers,
        data: result.data
      });

      if (!response.ok) {
        const error = new Error(`HTTP Error: ${result.status} - ${JSON.stringify(result.data)}`);
        this.logDebug('Error:', error);
        throw error;
      }

      return result;
    } catch (error) {
      this.logDebug('Network Error:', error);
      throw error;
    }
  }
}