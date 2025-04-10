import { BrowserHTTPAdapter } from '../../adapters/browser';

describe('BrowserHTTPAdapter', () => {
  let adapter: BrowserHTTPAdapter;
  const mockConfig = {
    baseURL: 'http://api.example.com/v1',
    headers: { 'Content-Type': 'application/json' },
    auth: {
      username: 'test-client',
      password: 'test-secret'
    }
  };

  beforeEach(() => {
    adapter = new BrowserHTTPAdapter(mockConfig);
    // Clear fetch mocks between tests
    (global as any).fetch = jest.fn();
  });

  describe('URL Construction', () => {
    it('should correctly construct URL with endpoint that has leading slash', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve({ data: 'test' })
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      await adapter.request({
        method: 'GET',
        endpoint: '/test'
      });

      expect(global.fetch).toHaveBeenCalledWith(
        'http://api.example.com/v1/test',
        expect.any(Object)
      );
    });

    it('should correctly construct URL with endpoint that has no leading slash', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve({ data: 'test' })
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      await adapter.request({
        method: 'GET',
        endpoint: 'test'
      });

      expect(global.fetch).toHaveBeenCalledWith(
        'http://api.example.com/v1/test',
        expect.any(Object)
      );
    });

    it('should correctly append query parameters', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve({ data: 'test' })
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      await adapter.request({
        method: 'GET',
        endpoint: '/test',
        params: { page: 1, limit: 10 }
      });

      expect(global.fetch).toHaveBeenCalledWith(
        'http://api.example.com/v1/test?page=1&limit=10',
        expect.any(Object)
      );
    });
  });

  it('should make GET request successfully', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve({ data: 'test' })
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await adapter.request({
      method: 'GET',
      endpoint: '/test'
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://api.example.com/v1/test',
      expect.objectContaining({
        method: 'GET',
        headers: expect.any(Headers)
      })
    );
    expect(result.status).toBe(200);
    expect(result.data).toEqual({ data: 'test' });
  });

  it('should make POST request with data', async () => {
    const mockResponse = {
      ok: true,
      status: 201,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve({ id: '123' })
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await adapter.request({
      method: 'POST',
      endpoint: '/test',
      data: { name: 'test' }
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://api.example.com/v1/test',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ name: 'test' }),
        headers: expect.any(Headers)
      })
    );
    expect(result.status).toBe(201);
    expect(result.data).toEqual({ id: '123' });
  });

  it('should handle query parameters', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve({ data: 'test' })
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    await adapter.request({
      method: 'GET',
      endpoint: '/test',
      params: { page: 1, limit: 10 }
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://api.example.com/v1/test?page=1&limit=10',
      expect.any(Object)
    );
  });

  it('should set auth headers correctly', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve({})
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    await adapter.request({
      method: 'GET',
      endpoint: '/test'
    });

    const expectedAuthValue = 'Basic ' + btoa('test-client:test-secret');
    
    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.any(Headers)
      })
    );

    const [, options] = (global.fetch as jest.Mock).mock.calls[0];
    expect(options.headers.get('Authorization')).toBe(expectedAuthValue);
  });

  it('should handle HTTP error responses', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve({ error: 'Not found' })
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    await expect(adapter.request({
      method: 'GET',
      endpoint: '/test'
    })).rejects.toThrow('HTTP Error: 404');
  });

  it('should handle network errors', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(adapter.request({
      method: 'GET',
      endpoint: '/test'
    })).rejects.toThrow('Network error');
  });

  it('should handle empty response bodies', async () => {
    const mockResponse = {
      ok: true,
      status: 204,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.reject(new Error('No body'))
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await adapter.request({
      method: 'DELETE',
      endpoint: '/test'
    });

    expect(result.status).toBe(204);
    expect(result.data).toBeUndefined();
  });

  it('should handle invalid JSON responses', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.reject(new Error('Invalid JSON'))
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await adapter.request({
      method: 'GET',
      endpoint: '/test'
    });

    expect(result.status).toBe(200);
    expect(result.data).toBeUndefined();
  });
});