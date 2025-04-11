import { Commerce7Client } from '../../client';
import { Product, ProductListResponse, ProductStatus } from './types';

export class ProductsAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
    updatedAt?: string;
    webStatus?: ProductStatus;
    adminStatus?: ProductStatus;
    collectionId?: string;
  }): Promise<ProductListResponse> {
    return this.getRequest<ProductListResponse>('/product', params);
  }

  async get(productId: string): Promise<Product> {
    return this.getRequest<Product>(`/product/${productId}`);
  }

  async create(product: Partial<Product>): Promise<Product> {
    return this.postRequest<Product>('/product', product);
  }

  async update(productId: string, product: Partial<Product>): Promise<Product> {
    return this.putRequest<Product>(`/product/${productId}`, product);
  }

  async delete(productId: string): Promise<void> {
    return this.deleteRequest(`/product/${productId}`);
  }
}