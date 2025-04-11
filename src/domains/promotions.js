import { Commerce7Client } from "../client.js";

export class PromotionsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/promotion", params);
  }

  async get(promotionId) {
    return this.getRequest(`/promotion/${promotionId}`);
  }

  async create(promotion) {
    return this.postRequest("/promotion", promotion);
  }

  async update(promotionId, promotion) {
    return this.putRequest(`/promotion/${promotionId}`, promotion);
  }

  async delete(promotionId) {
    return this.deleteRequest(`/promotion/${promotionId}`);
  }
}
