import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Promotion } from './types';

export class PromotionsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<Promotion>> {
    return this.getRequest<PaginatedResponse<Promotion>>('/promotions', params);
  }

  async get(promotionId: string): Promise<Promotion> {
    return this.getRequest<Promotion>(`/promotions/${promotionId}`);
  }

  async create(promotion: Partial<Promotion>): Promise<Promotion> {
    return this.postRequest<Promotion>('/promotions', promotion);
  }

  async update(promotionId: string, promotion: Partial<Promotion>): Promise<Promotion> {
    return this.putRequest<Promotion>(`/promotions/${promotionId}`, promotion);
  }

  async delete(promotionId: string): Promise<void> {
    return this.deleteRequest(`/promotions/${promotionId}`);
  }

  async validate(promotionId: string, params?: {
    subtotal?: number;
    customerId?: string;
  }): Promise<Promotion> {
    return this.getRequest<Promotion>(`/promotions/${promotionId}/validate`, params);
  }
}