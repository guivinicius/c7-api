import { Commerce7Client } from "../client.js";

export class VendorsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/vendor", params);
  }

  async get(vendorId) {
    return this.getRequest(`/vendor/${vendorId}`);
  }

  async create(vendor) {
    return this.postRequest("/vendor", vendor);
  }

  async update(vendorId, vendor) {
    return this.putRequest(`/vendor/${vendorId}`, vendor);
  }

  async delete(vendorId) {
    return this.deleteRequest(`/vendor/${vendorId}`);
  }
}
