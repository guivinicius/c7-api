import { Commerce7Client } from "../client.js";

export class OrdersAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/order", params);
  }

  async get(orderId) {
    return this.getRequest(`/order/${orderId}`);
  }

  async create(order) {
    return this.postRequest("/order", order);
  }

  async updateStartingOrderNumber(startingOrderNumber) {
    return this.putRequest("/order-number", {
      orderNumber: startingOrderNumber,
    });
  }
}
