import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Tax } from './types';

export class TaxesAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    country?: string;
    region?: string;
  }): Promise<PaginatedResponse<Tax, 'taxes'>> {
    return this.getRequest<PaginatedResponse<Tax, 'taxes'>>('/tax', params);
  }

  async get(taxId: string): Promise<Tax> {
    return this.getRequest<Tax>(`/tax/${taxId}`);
  }

  async create(tax: Partial<Tax>): Promise<Tax> {
    return this.postRequest<Tax>('/tax', tax);
  }

  async update(taxId: string, tax: Partial<Tax>): Promise<Tax> {
    return this.putRequest<Tax>(`/tax/${taxId}`, tax);
  }

  async delete(taxId: string): Promise<void> {
    return this.deleteRequest(`/tax/${taxId}`);
  }
}