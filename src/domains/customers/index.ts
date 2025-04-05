import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Customer, Address } from './types';

export class CustomersAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    query?: string;
  }): Promise<PaginatedResponse<Customer>> {
    return this.getRequest<PaginatedResponse<Customer>>('/customers', params);
  }

  async get(customerId: string): Promise<Customer> {
    return this.getRequest<Customer>(`/customers/${customerId}`);
  }

  async create(customer: Partial<Customer>): Promise<Customer> {
    return this.postRequest<Customer>('/customers', customer);
  }

  async update(customerId: string, customer: Partial<Customer>): Promise<Customer> {
    return this.putRequest<Customer>(`/customers/${customerId}`, customer);
  }

  async delete(customerId: string): Promise<void> {
    return this.deleteRequest(`/customers/${customerId}`);
  }

  async addAddress(customerId: string, address: Partial<Address>): Promise<Address> {
    return this.postRequest<Address>(`/customers/${customerId}/addresses`, address);
  }

  async updateAddress(customerId: string, addressId: string, address: Partial<Address>): Promise<Address> {
    return this.putRequest<Address>(`/customers/${customerId}/addresses/${addressId}`, address);
  }

  async deleteAddress(customerId: string, addressId: string): Promise<void> {
    return this.deleteRequest(`/customers/${customerId}/addresses/${addressId}`);
  }
}