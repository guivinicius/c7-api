import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Webhook } from './types';

export class WebhooksAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<Webhook>> {
    return this.getRequest<PaginatedResponse<Webhook>>('/webhooks', params);
  }

  async get(webhookId: string): Promise<Webhook> {
    return this.getRequest<Webhook>(`/webhooks/${webhookId}`);
  }

  async create(webhook: Partial<Webhook>): Promise<Webhook> {
    return this.postRequest<Webhook>('/webhooks', webhook);
  }

  async update(webhookId: string, webhook: Partial<Webhook>): Promise<Webhook> {
    return this.putRequest<Webhook>(`/webhooks/${webhookId}`, webhook);
  }

  async delete(webhookId: string): Promise<void> {
    return this.deleteRequest(`/webhooks/${webhookId}`);
  }

  async test(webhookId: string, event: string): Promise<{ success: boolean }> {
    return this.postRequest<{ success: boolean }>(`/webhooks/${webhookId}/test`, { event });
  }
}