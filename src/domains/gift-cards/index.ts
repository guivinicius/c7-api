import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { GiftCard } from './types';

export class GiftCardsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
    code?: string;
  }): Promise<PaginatedResponse<GiftCard>> {
    return this.getRequest<PaginatedResponse<GiftCard>>('/gift-cards', params);
  }

  async get(giftCardId: string): Promise<GiftCard> {
    return this.getRequest<GiftCard>(`/gift-cards/${giftCardId}`);
  }

  async create(giftCard: Partial<GiftCard>): Promise<GiftCard> {
    return this.postRequest<GiftCard>('/gift-cards', giftCard);
  }

  async update(giftCardId: string, giftCard: Partial<GiftCard>): Promise<GiftCard> {
    return this.putRequest<GiftCard>(`/gift-cards/${giftCardId}`, giftCard);
  }

  async delete(giftCardId: string): Promise<void> {
    return this.deleteRequest(`/gift-cards/${giftCardId}`);
  }

  async getByCode(code: string): Promise<GiftCard> {
    return this.getRequest<GiftCard>(`/gift-cards/code/${code}`);
  }

  async redeem(giftCardId: string, amount: number): Promise<GiftCard> {
    return this.postRequest<GiftCard>(`/gift-cards/${giftCardId}/redeem`, { amount });
  }
}