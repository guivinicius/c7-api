import { Commerce7Client } from "../client.js";

export class InventoryAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/inventory", params);
  }

  async get(inventoryId) {
    return this.getRequest(`/inventory/${inventoryId}`);
  }

  async initialize(initializeInventory) {
    return this.postRequest("/inventory", initializeInventory);
  }

  async createInventoryTransaction(inventoryTransaction) {
    return this.postRequest("/inventory-transaction", inventoryTransaction);
  }
}
