export interface RequestConfig {
  baseURL: string;
  headers?: Record<string, string>;
  auth?: {
    username: string;
    password: string;
  };
  params?: Record<string, any>;
}

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  data?: any;
  params?: Record<string, any>;
}

export interface HTTPResponse<T = any> {
  data: T;
  status: number;
  headers: Record<string, string>;
}

export interface HTTPAdapter {
  request<T>(options: RequestOptions): Promise<HTTPResponse<T>>;
}