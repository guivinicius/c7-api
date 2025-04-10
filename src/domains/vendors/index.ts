import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Vendor } from './types';

export class VendorsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<Vendor, 'vendors'>> {
    return this.getRequest<PaginatedResponse<Vendor, 'vendors'>>('/vendor', params);
  }

  async get(vendorId: string): Promise<Vendor> {
    return this.getRequest<Vendor>(`/vendor/${vendorId}`);
  }

  async create(vendor: Partial<Vendor>): Promise<Vendor> {
    return this.postRequest<Vendor>('/vendor', vendor);
  }

  async update(vendorId: string, vendor: Partial<Vendor>): Promise<Vendor> {
    return this.putRequest<Vendor>(`/vendor/${vendorId}`, vendor);
  }

  async delete(vendorId: string): Promise<void> {
    return this.deleteRequest(`/vendor/${vendorId}`);
  }
}