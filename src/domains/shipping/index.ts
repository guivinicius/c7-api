import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { ShippingZone } from './types';

export class ShippingAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    country?: string;
    region?: string;
  }): Promise<PaginatedResponse<ShippingZone>> {
    return this.getRequest<PaginatedResponse<ShippingZone>>('/shipping', params);
  }

  async get(zoneId: string): Promise<ShippingZone> {
    return this.getRequest<ShippingZone>(`/shipping/${zoneId}`);
  }

  async create(zone: Partial<ShippingZone>): Promise<ShippingZone> {
    return this.postRequest<ShippingZone>('/shipping', zone);
  }

  async update(zoneId: string, zone: Partial<ShippingZone>): Promise<ShippingZone> {
    return this.putRequest<ShippingZone>(`/shipping/${zoneId}`, zone);
  }

  async delete(zoneId: string): Promise<void> {
    return this.deleteRequest(`/shipping/${zoneId}`);
  }

  async getRates(params: {
    country: string;
    region?: string;
    subtotal: number;
    weight?: number;
  }): Promise<ShippingZone[]> {
    return this.getRequest<ShippingZone[]>('/shipping/rates', params);
  }
}