import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Tax } from './types';

export class TaxesAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    country?: string;
    region?: string;
  }): Promise<PaginatedResponse<Tax>> {
    return this.getRequest<PaginatedResponse<Tax>>('/taxes', params);
  }

  async get(taxId: string): Promise<Tax> {
    return this.getRequest<Tax>(`/taxes/${taxId}`);
  }

  async create(tax: Partial<Tax>): Promise<Tax> {
    return this.postRequest<Tax>('/taxes', tax);
  }

  async update(taxId: string, tax: Partial<Tax>): Promise<Tax> {
    return this.putRequest<Tax>(`/taxes/${taxId}`, tax);
  }

  async delete(taxId: string): Promise<void> {
    return this.deleteRequest(`/taxes/${taxId}`);
  }

  async calculate(params: {
    country: string;
    region?: string;
    subtotal: number;
  }): Promise<{ total: number; taxes: Tax[] }> {
    return this.getRequest<{ total: number; taxes: Tax[] }>('/taxes/calculate', params);
  }
}