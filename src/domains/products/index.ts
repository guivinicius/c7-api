import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Product } from './types';

export class ProductsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    query?: string;
    status?: 'active' | 'draft' | 'archived';
    productType?: string;
    vendor?: string;
  }): Promise<PaginatedResponse<Product>> {
    return this.getRequest<PaginatedResponse<Product>>('/products', params);
  }

  async get(productId: string): Promise<Product> {
    return this.getRequest<Product>(`/products/${productId}`);
  }

  async create(product: Partial<Product>): Promise<Product> {
    return this.postRequest<Product>('/products', product);
  }

  async update(productId: string, product: Partial<Product>): Promise<Product> {
    return this.putRequest<Product>(`/products/${productId}`, product);
  }

  async delete(productId: string): Promise<void> {
    return this.deleteRequest(`/products/${productId}`);
  }

  async getByHandle(handle: string): Promise<Product> {
    return this.getRequest<Product>(`/products/handle/${handle}`);
  }
}