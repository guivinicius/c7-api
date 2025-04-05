import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { InventoryLevel } from './types';

export class InventoryAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    productId?: string;
    variantId?: string;
    locationId?: string;
  }): Promise<PaginatedResponse<InventoryLevel>> {
    return this.getRequest<PaginatedResponse<InventoryLevel>>('/inventory', params);
  }

  async get(inventoryId: string): Promise<InventoryLevel> {
    return this.getRequest<InventoryLevel>(`/inventory/${inventoryId}`);
  }

  async adjust(inventoryId: string, quantity: number, reason?: string): Promise<InventoryLevel> {
    return this.postRequest<InventoryLevel>(`/inventory/${inventoryId}/adjust`, { quantity, reason });
  }

  async getByProductVariant(productId: string, variantId: string, locationId?: string): Promise<InventoryLevel> {
    const params = locationId ? { locationId } : undefined;
    return this.getRequest<InventoryLevel>(`/inventory/product/${productId}/variant/${variantId}`, params);
  }
}