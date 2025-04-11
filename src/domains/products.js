import { Commerce7Client } from "../client.js";

export class ProductsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/product", params);
  }

  async get(productId) {
    return this.getRequest(`/product/${productId}`);
  }

  async create(product) {
    return this.postRequest("/product", product);
  }

  async update(productId, product) {
    return this.putRequest(`/product/${productId}`, product);
  }

  async delete(productId) {
    return this.deleteRequest(`/product/${productId}`);
  }
}
