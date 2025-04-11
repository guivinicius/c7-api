import { Commerce7Client } from '../../client';
import { Tax, TaxResponse, CreateTaxInput, UpdateTaxInput } from './types';

export class TaxesAPI extends Commerce7Client {
  async list(): Promise<TaxResponse> {
    return this.getRequest<TaxResponse>('/tax');
  }

  async get(taxId: string): Promise<Tax> {
    return this.getRequest<Tax>(`/tax/${taxId}`);
  }

  async create(tax: CreateTaxInput): Promise<Tax> {
    return this.postRequest<Tax>('/tax', tax);
  }

  async update(taxId: string, tax: UpdateTaxInput): Promise<Tax> {
    return this.putRequest<Tax>(`/tax/${taxId}`, tax);
  }

  async delete(taxId: string): Promise<void> {
    return this.deleteRequest(`/tax/${taxId}`);
  }
}