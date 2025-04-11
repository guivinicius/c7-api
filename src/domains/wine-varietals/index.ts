import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { WineVarietal } from './types';

export class WineVarietalsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
  }): Promise<PaginatedResponse<WineVarietal, 'wineVarietals'>> {
    return this.getRequest<PaginatedResponse<WineVarietal, 'wineVarietals'>>('/wine-varietal', params);
  }
}