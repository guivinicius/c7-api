import { NodeHTTPAdapter } from '../../adapters/node';
import * as http from 'http';
import * as https from 'https';

jest.mock('http');
jest.mock('https');

describe('NodeHTTPAdapter', () => {
  let adapter: NodeHTTPAdapter;
  const mockConfig = {
    baseURL: 'http://api.example.com',
    headers: { 'Content-Type': 'application/json' },
    auth: {
      username: 'test-client',
      password: 'test-secret'
    }
  };

  beforeEach(() => {
    adapter = new NodeHTTPAdapter(mockConfig);
    jest.clearAllMocks();
  });

  it('should make GET request successfully', async () => {
    const mockResponse = {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'data') cb(JSON.stringify({ data: 'test' }));
        if (event === 'end') cb();
        return mockResponse;
      })
    };

    const mockRequest = {
      on: jest.fn(),
      end: jest.fn(),
      write: jest.fn()
    };

    (http.request as jest.Mock).mockImplementation((url, options, cb) => {
      cb(mockResponse);
      return mockRequest;
    });

    const result = await adapter.request({
      method: 'GET',
      endpoint: '/test'
    });

    expect(result.status).toBe(200);
    expect(result.data).toEqual({ data: 'test' });
    expect(mockRequest.end).toHaveBeenCalled();
  });

  it('should make POST request with data', async () => {
    const mockResponse = {
      statusCode: 201,
      headers: { 'content-type': 'application/json' },
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'data') cb(JSON.stringify({ id: '123' }));
        if (event === 'end') cb();
        return mockResponse;
      })
    };

    const mockRequest = {
      on: jest.fn(),
      end: jest.fn(),
      write: jest.fn()
    };

    (http.request as jest.Mock).mockImplementation((url, options, cb) => {
      cb(mockResponse);
      return mockRequest;
    });

    const result = await adapter.request({
      method: 'POST',
      endpoint: '/test',
      data: { name: 'test' }
    });

    expect(result.status).toBe(201);
    expect(result.data).toEqual({ id: '123' });
    expect(mockRequest.write).toHaveBeenCalledWith(JSON.stringify({ name: 'test' }));
    expect(mockRequest.end).toHaveBeenCalled();
  });

  it('should handle HTTPS requests', async () => {
    const httpsAdapter = new NodeHTTPAdapter({
      ...mockConfig,
      baseURL: 'https://api.example.com'
    });

    const mockResponse = {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'data') cb(JSON.stringify({ data: 'test' }));
        if (event === 'end') cb();
        return mockResponse;
      })
    };

    const mockRequest = {
      on: jest.fn(),
      end: jest.fn(),
      write: jest.fn()
    };

    (https.request as jest.Mock).mockImplementation((url, options, cb) => {
      cb(mockResponse);
      return mockRequest;
    });

    const result = await httpsAdapter.request({
      method: 'GET',
      endpoint: '/test'
    });

    expect(result.status).toBe(200);
    expect(result.data).toEqual({ data: 'test' });
  });

  it('should handle query parameters', async () => {
    const mockResponse = {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'data') cb(JSON.stringify({ data: 'test' }));
        if (event === 'end') cb();
        return mockResponse;
      })
    };

    const mockRequest = {
      on: jest.fn(),
      end: jest.fn(),
      write: jest.fn()
    };

    (http.request as jest.Mock).mockImplementation((url, options, cb) => {
      expect(url).toContain('?page=1&limit=10');
      cb(mockResponse);
      return mockRequest;
    });

    await adapter.request({
      method: 'GET',
      endpoint: '/test',
      params: { page: 1, limit: 10 }
    });
  });

  it('should handle errors', async () => {
    const mockError = new Error('Network error');
    const mockRequest = {
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'error') cb(mockError);
        return mockRequest;
      }),
      end: jest.fn(),
      write: jest.fn()
    };

    (http.request as jest.Mock).mockImplementation(() => mockRequest);

    await expect(adapter.request({
      method: 'GET',
      endpoint: '/test'
    })).rejects.toThrow('Network error');
  });

  it('should handle HTTP error responses', async () => {
    const mockResponse = {
      statusCode: 404,
      headers: { 'content-type': 'application/json' },
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'data') cb(JSON.stringify({ error: 'Not found' }));
        if (event === 'end') cb();
        return mockResponse;
      })
    };

    const mockRequest = {
      on: jest.fn(),
      end: jest.fn(),
      write: jest.fn()
    };

    (http.request as jest.Mock).mockImplementation((url, options, cb) => {
      cb(mockResponse);
      return mockRequest;
    });

    await expect(adapter.request({
      method: 'GET',
      endpoint: '/test'
    })).rejects.toThrow('HTTP Error: 404');
  });

  it('should handle empty response bodies', async () => {
    const mockResponse = {
      statusCode: 204,
      headers: { 'content-type': 'application/json' },
      on: jest.fn().mockImplementation((event, cb) => {
        if (event === 'data') cb('');
        if (event === 'end') cb();
        return mockResponse;
      })
    };

    const mockRequest = {
      on: jest.fn(),
      end: jest.fn(),
      write: jest.fn()
    };

    (http.request as jest.Mock).mockImplementation((url, options, cb) => {
      cb(mockResponse);
      return mockRequest;
    });

    const result = await adapter.request({
      method: 'DELETE',
      endpoint: '/test'
    });

    expect(result.status).toBe(204);
    expect(result.data).toBeUndefined();
  });
});