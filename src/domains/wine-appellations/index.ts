import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { WineAppellation } from './types';

export class WineAppellationsAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
  }): Promise<PaginatedResponse<WineAppellation, 'wineAppellations'>> {
    return this.getRequest<PaginatedResponse<WineAppellation, 'wineAppellations'>>('/wine-appellation', params);
  }
}