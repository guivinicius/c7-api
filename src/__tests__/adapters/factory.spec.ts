import { createHTTPAdapter } from '../../adapters';
import { NodeHTTPAdapter } from '../../adapters/node';
import { BrowserHTTPAdapter } from '../../adapters/browser';

describe('HTTP Adapter Factory', () => {
  const mockConfig = {
    baseURL: 'http://api.example.com',
    headers: { 'Content-Type': 'application/json' }
  };

  let originalWindow: any;

  beforeEach(() => {
    originalWindow = global.window;
  });

  afterEach(() => {
    if (originalWindow) {
      (global as any).window = originalWindow;
    } else {
      delete (global as any).window;
    }
  });

  it('should create NodeHTTPAdapter when in Node.js environment', () => {
    delete (global as any).window;
    const adapter = createHTTPAdapter(mockConfig);
    expect(adapter).toBeInstanceOf(NodeHTTPAdapter);
  });

  it('should create BrowserHTTPAdapter when in browser environment', () => {
    (global as any).window = {};
    const adapter = createHTTPAdapter(mockConfig);
    expect(adapter).toBeInstanceOf(BrowserHTTPAdapter);
  });
});