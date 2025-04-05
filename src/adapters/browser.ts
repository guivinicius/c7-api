import { HTTPAdapter, RequestConfig, RequestOptions, HTTPResponse } from './interfaces';

export class BrowserHTTPAdapter implements HTTPAdapter {
  private config: RequestConfig;

  constructor(config: RequestConfig) {
    this.config = config;
  }

  private buildURL(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(endpoint, this.config.baseURL);
    
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

    const response = await fetch(url, fetchOptions);
    const data = await response.json().catch(() => undefined);

    const result: HTTPResponse = {
      data,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    };

    if (!response.ok) {
      throw new Error(`HTTP Error: ${result.status} - ${JSON.stringify(result.data)}`);
    }

    return result;
  }
}