export * from './interfaces';
export * from './browser';
export * from './node';

import { HTTPAdapter, RequestConfig } from './interfaces';
import { NodeHTTPAdapter } from './node';
import { BrowserHTTPAdapter } from './browser';

export const createHTTPAdapter = (config: RequestConfig): HTTPAdapter => {
  if (typeof window === 'undefined') {
    return new NodeHTTPAdapter(config);
  }
  return new BrowserHTTPAdapter(config);
};