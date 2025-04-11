import { Commerce7Client } from "../client.js";

export class CouponsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/coupon", params);
  }

  async get(couponId) {
    return this.getRequest(`/coupon/${couponId}`);
  }

  async create(coupon) {
    return this.postRequest("/coupon", coupon);
  }

  async update(couponId, coupon) {
    return this.putRequest(`/coupon/${couponId}`, coupon);
  }

  async delete(couponId) {
    return this.deleteRequest(`/coupon/${couponId}`);
  }
}
