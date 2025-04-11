import { Commerce7Client } from "../client.js";

export class GiftCardsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/gift-card", params);
  }

  async get(giftCardId) {
    return this.getRequest(`/gift-card/${giftCardId}`);
  }

  async create(giftCard) {
    return this.postRequest("/gift-card", giftCard);
  }

  async update(giftCardId, giftCard) {
    return this.putRequest(`/gift-card/${giftCardId}`, giftCard);
  }

  async delete(giftCardId) {
    return this.deleteRequest(`/gift-card/${giftCardId}`);
  }
}
