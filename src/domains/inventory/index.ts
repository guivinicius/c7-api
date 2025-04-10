import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Inventory, InitializeInventoryInput, InventoryTransaction, CreateInventoryTransactionInput } from './types';

export class InventoryAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
  }): Promise<PaginatedResponse<Inventory, 'inventories'>> {
    return this.getRequest<PaginatedResponse<Inventory, 'inventories'>>('/inventory', params);
  }

  async get(inventoryId: string): Promise<Inventory> {
    return this.getRequest<Inventory>(`/inventory/${inventoryId}`);
  }

  async initialize(initializeInventory: InitializeInventoryInput): Promise<Inventory> {
    return this.postRequest<Inventory>('/inventory', initializeInventory);
  }

  async createInventoryTransaction(inventoryTransaction: CreateInventoryTransactionInput): Promise<InventoryTransaction> {
    return this.postRequest<InventoryTransaction>('/inventory-transaction', inventoryTransaction);
  }
}