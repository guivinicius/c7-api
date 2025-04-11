import { Commerce7Client } from "../client.js";

export class InventoryLocationAPI extends Commerce7Client {
  async list() {
    return this.getRequest("/inventory-locations");
  }

  async get(id) {
    return this.getRequest(`/inventory-locations/${id}`);
  }

  async create(payload) {
    return this.postRequest("/inventory-locations", payload);
  }
}
