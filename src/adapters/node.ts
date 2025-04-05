import * as http from 'http';
import * as https from 'https';
import { URL } from 'url';
import { HTTPAdapter, RequestConfig, RequestOptions, HTTPResponse } from './interfaces';

export class NodeHTTPAdapter implements HTTPAdapter {
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
    const urlObj = new URL(url);

    const requestOptions: https.RequestOptions = {
      method: options.method,
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
      },
    };

    if (this.config.auth) {
      const authString = Buffer.from(
        `${this.config.auth.username}:${this.config.auth.password}`
      ).toString('base64');
      requestOptions.headers!['Authorization'] = `Basic ${authString}`;
    }

    return new Promise((resolve, reject) => {
      const req = (urlObj.protocol === 'https:' ? https : http).request(
        url,
        requestOptions,
        (res) => {
          let data = '';

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            const response: HTTPResponse = {
              data: data ? JSON.parse(data) : undefined,
              status: res.statusCode || 500,
              headers: res.headers as Record<string, string>,
            };

            if (response.status >= 200 && response.status < 300) {
              resolve(response);
            } else {
              reject(new Error(`HTTP Error: ${response.status} - ${JSON.stringify(response.data)}`));
            }
          });
        }
      );

      req.on('error', reject);

      if (options.data) {
        req.write(JSON.stringify(options.data));
      }

      req.end();
    });
  }
}