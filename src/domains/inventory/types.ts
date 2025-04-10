export interface Inventory {
  id: string;
  inventoryLocationTitle: string;
  inventoryLocationId: string;
  productVariantId: string;
  productVariantTitle: string;
  sku: string;
  upcCode: string;
  hasInventory: number;
  availableForSaleCount: number;
  reserveCount: number;
  allocatedCount: number;
  inventoryPolicy: 'Dont Sell' | 'Back Order';
  productId: string;
  productTitle: string;
}

export interface InventoryListResponse {
  inventories: Inventory[];
  total: number;
}

export interface InitialInventoryLocation {
  inventoryLocationId: string;
  availableForSale: number;
}

export interface InitializeInventoryInput {
  sku: string;
  initialInventory: InitialInventoryLocation[];
  inventoryPolicy: 'Dont Sell' | 'Back Order';
}

export interface CreateInventoryTransactionInput {
  action: 'Reset' | string;
  sku: string;
  notes: string;
  availableForSaleCount: number;
  reserveCount: number;
  inventoryLocationId: string;
}

export interface InventoryTransaction {
  id: string;
  inventoryLocationId: string;
  sku: string;
  productVariantId: string;
  transactionType: string;
  transactionDetails: string;
  notes: string;
  availableForSaleCount: number;
  reserveCount: number;
  allocatedCount: number;
  transactionDate: string;
  updatedAt: string;
  createdAt: string;
  searchText: string;
}