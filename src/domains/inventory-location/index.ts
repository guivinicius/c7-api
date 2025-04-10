import { Commerce7Client } from '../../client';
import { InventoryLocation, InventoryLocationCreateInput, InventoryLocationListResponse } from './types';

export class InventoryLocationAPI extends Commerce7Client {
  async list(): Promise<InventoryLocationListResponse> {
    return this.getRequest<InventoryLocationListResponse>('/inventory-locations');
  }

  async get(id: string): Promise<InventoryLocation> {
    return this.getRequest<InventoryLocation>(`/inventory-locations/${id}`);
  }

  async create(payload: InventoryLocationCreateInput): Promise<InventoryLocation> {
    return this.postRequest<InventoryLocation>('/inventory-locations', payload);
  }
}