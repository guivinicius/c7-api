import { Commerce7Client } from "../client.js";

export class ShippingAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/shipping", params);
  }

  async get(shippingId) {
    return this.getRequest(`/shipping/${shippingId}`);
  }

  async create(shipping) {
    return this.postRequest("/shipping", shipping);
  }

  async update(shippingId, shipping) {
    return this.putRequest(`/shipping/${shippingId}`, shipping);
  }

  async delete(shippingId) {
    return this.deleteRequest(`/shipping/${shippingId}`);
  }
}
