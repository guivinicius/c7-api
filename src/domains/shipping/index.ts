import { Commerce7Client } from '../../client';
import { ListResponse } from '../../common/types/pagination';
import { ShippingZone, ShippingZoneListResponse } from './types';

export class ShippingAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    country?: string;
    region?: string;
  }): Promise<ShippingZoneListResponse> {
    return this.getRequest<ShippingZoneListResponse>('/shipping', params);
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
}