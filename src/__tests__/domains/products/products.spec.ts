import { Commerce7Client } from '../../../client';
import { ProductsAPI } from '../../../domains/products';
import { createHTTPAdapter } from '../../../adapters';
import { Product } from '../../../domains/products/types';

jest.mock('../../../adapters');

// Mock the base client methods
const mockGetRequest = jest.fn();
const mockPostRequest = jest.fn();
const mockPutRequest = jest.fn();
const mockDeleteRequest = jest.fn();

jest.mock('../../../client', () => ({
  Commerce7Client: class {
    protected client: any;
    protected getRequest = mockGetRequest;
    protected postRequest = mockPostRequest;
    protected putRequest = mockPutRequest;
    protected deleteRequest = mockDeleteRequest;
  }
}));

describe('ProductsAPI', () => {
  let productsAPI: ProductsAPI;

  beforeEach(() => {
    productsAPI = new ProductsAPI({
      tenantId: 'test-tenant',
      clientId: 'test-client',
      clientSecret: 'test-secret'
    });
    jest.clearAllMocks();
  });

  describe('list()', () => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Test Product',
        handle: 'test-product',
        price: 99.99,
        status: 'active',
        variants: [],
        createdAt: '2025-04-04T00:00:00Z',
        updatedAt: '2025-04-04T00:00:00Z'
      }
    ];

    it('should list products with pagination', async () => {
      const mockResponse = {
        data: mockProducts,
        meta: {
          total: 1,
          count: 1,
          offset: 0
        }
      };
      mockGetRequest.mockResolvedValueOnce(mockResponse);

      const result = await productsAPI.list({ limit: 10, offset: 0 });

      expect(mockGetRequest).toHaveBeenCalledWith('/products', { limit: 10, offset: 0 });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('get()', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      handle: 'test-product',
      price: 99.99,
      status: 'active',
      variants: [],
      createdAt: '2025-04-04T00:00:00Z',
      updatedAt: '2025-04-04T00:00:00Z'
    };

    it('should get a product by ID', async () => {
      mockGetRequest.mockResolvedValueOnce(mockProduct);

      const result = await productsAPI.get('1');

      expect(mockGetRequest).toHaveBeenCalledWith('/products/1');
      expect(result).toEqual(mockProduct);
    });

    it('should handle product not found', async () => {
      mockGetRequest.mockRejectedValueOnce(new Error('Product not found'));

      await expect(productsAPI.get('999')).rejects.toThrow('Product not found');
    });
  });

  describe('create()', () => {
    const newProduct: Partial<Product> = {
      name: 'New Product',
      handle: 'new-product',
      price: 149.99,
      status: 'draft'
    };

    it('should create a new product', async () => {
      const createdProduct = {
        ...newProduct,
        id: '2',
        variants: [],
        createdAt: '2025-04-04T00:00:00Z',
        updatedAt: '2025-04-04T00:00:00Z'
      };

      mockPostRequest.mockResolvedValueOnce(createdProduct);

      const result = await productsAPI.create(newProduct);

      expect(mockPostRequest).toHaveBeenCalledWith('/products', newProduct);
      expect(result).toEqual(createdProduct);
    });
  });

  describe('update()', () => {
    const updateData: Partial<Product> = {
      name: 'Updated Product',
      price: 199.99
    };

    it('should update an existing product', async () => {
      const updatedProduct = {
        id: '1',
        ...updateData,
        handle: 'test-product',
        status: 'active',
        variants: [],
        createdAt: '2025-04-04T00:00:00Z',
        updatedAt: '2025-04-04T00:00:00Z'
      };

      mockPutRequest.mockResolvedValueOnce(updatedProduct);

      const result = await productsAPI.update('1', updateData);

      expect(mockPutRequest).toHaveBeenCalledWith('/products/1', updateData);
      expect(result).toEqual(updatedProduct);
    });
  });

  describe('delete()', () => {
    it('should delete a product', async () => {
      mockDeleteRequest.mockResolvedValueOnce(undefined);

      await productsAPI.delete('1');

      expect(mockDeleteRequest).toHaveBeenCalledWith('/products/1');
    });
  });

  describe('getByHandle()', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      handle: 'test-product',
      price: 99.99,
      status: 'active',
      variants: [],
      createdAt: '2025-04-04T00:00:00Z',
      updatedAt: '2025-04-04T00:00:00Z'
    };

    it('should get a product by handle', async () => {
      mockGetRequest.mockResolvedValueOnce(mockProduct);

      const result = await productsAPI.getByHandle('test-product');

      expect(mockGetRequest).toHaveBeenCalledWith('/products/handle/test-product');
      expect(result).toEqual(mockProduct);
    });
  });
});