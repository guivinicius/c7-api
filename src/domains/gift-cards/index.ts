import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { GiftCard } from './types';

export class GiftCardsAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
  }): Promise<PaginatedResponse<GiftCard, 'giftCards'>> {
    return this.getRequest<PaginatedResponse<GiftCard, 'giftCards'>>('/gift-card', params);
  }

  async get(giftCardId: string): Promise<GiftCard> {
    return this.getRequest<GiftCard>(`/gift-card/${giftCardId}`);
  }

  async create(giftCard: Partial<GiftCard>): Promise<GiftCard> {
    return this.postRequest<GiftCard>('/gift-card', giftCard);
  }

  async update(giftCardId: string, giftCard: Partial<GiftCard>): Promise<GiftCard> {
    return this.putRequest<GiftCard>(`/gift-card/${giftCardId}`, giftCard);
  }

  async delete(giftCardId: string): Promise<void> {
    return this.deleteRequest(`/gift-card/${giftCardId}`);
  }
}