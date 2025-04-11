import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Webhook, WebhookInput } from './types';

export class WebhooksAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
  }): Promise<PaginatedResponse<Webhook, 'webhooks'>> {
    return this.getRequest<PaginatedResponse<Webhook, 'webhooks'>>('/webhook', params);
  }

  async get(webhookId: string): Promise<Webhook> {
    return this.getRequest<Webhook>(`/webhook/${webhookId}`);
  }

  async create(webhook: WebhookInput): Promise<Webhook> {
    return this.postRequest<Webhook>('/webhook', webhook);
  }

  async update(webhookId: string, webhook: WebhookInput): Promise<Webhook> {
    return this.putRequest<Webhook>(`/webhook/${webhookId}`, webhook);
  }

  async delete(webhookId: string): Promise<void> {
    return this.deleteRequest(`/webhook/${webhookId}`);
  }
}