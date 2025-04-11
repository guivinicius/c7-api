import { Commerce7Client } from '../../client';
import { Shipping, ShippingResponse, CreateShippingInput, UpdateShippingInput } from './types';

export class ShippingAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
  }): Promise<ShippingResponse> {
    return this.getRequest<ShippingResponse>('/shipping', params);
  }

  async get(shippingId: string): Promise<Shipping> {
    return this.getRequest<Shipping>(`/shipping/${shippingId}`);
  }

  async create(shipping: CreateShippingInput): Promise<Shipping> {
    return this.postRequest<Shipping>('/shipping', shipping);
  }

  async update(shippingId: string, shipping: UpdateShippingInput): Promise<Shipping> {
    return this.putRequest<Shipping>(`/shipping/${shippingId}`, shipping);
  }

  async delete(shippingId: string): Promise<void> {
    return this.deleteRequest(`/shipping/${shippingId}`);
  }
}