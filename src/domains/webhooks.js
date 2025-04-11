import { Commerce7Client } from "../client.js";

export class WebhooksAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/webhook", params);
  }

  async get(webhookId) {
    return this.getRequest(`/webhook/${webhookId}`);
  }

  async create(webhook) {
    return this.postRequest("/webhook", webhook);
  }

  async update(webhookId, webhook) {
    return this.putRequest(`/webhook/${webhookId}`, webhook);
  }

  async delete(webhookId) {
    return this.deleteRequest(`/webhook/${webhookId}`);
  }
}
