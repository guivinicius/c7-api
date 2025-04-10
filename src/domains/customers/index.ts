import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Customer, Address, CreditCard, CreditCardCreateInput, CreditCardListResponse } from './types';

export interface CustomerCreateOptions {
  isSendTransactionEmail?: boolean;
}

export class CustomersAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
    orderCount?: string; // Example: 'gt:1' for order count greater than 1
    lifetimeValue?: string;
    createdAt?: string;
  }): Promise<PaginatedResponse<Customer, 'customer'>> {
    return this.getRequest<PaginatedResponse<Customer, 'customer'>>('/customer', params);
  }

  async get(customerId: string): Promise<Customer> {
    return this.getRequest<Customer>(`/customer/${customerId}`);
  }

  async create(customer: Partial<Customer>, options?: CustomerCreateOptions): Promise<Customer> {
    return this.postRequest<Customer>('/customer', {
      ...customer,
      isSendTransactionEmail: options?.isSendTransactionEmail
    });
  }

  async createWithAddress(customer: Partial<Customer> & { address: Partial<Address> }, options?: CustomerCreateOptions): Promise<Customer> {
    return this.postRequest<Customer>('/customer-address', {
      ...customer,
      isSendTransactionEmail: options?.isSendTransactionEmail
    });
  }

  async update(customerId: string, customer: Partial<Customer>): Promise<Customer> {
    return this.putRequest<Customer>(`/customer/${customerId}`, customer);
  }

  async delete(customerId: string): Promise<void> {
    return this.deleteRequest(`/customer/${customerId}`);
  }

  async listAddresses(customerId: string, params?:{
    searchText?: string;
  }): Promise<Address[]> {
    return this.getRequest<Address[]>(`/customer/${customerId}/address`);
  }

  async getAddress(customerId: string, addressId: string): Promise<Address> {
    return this.getRequest<Address>(`/customer/${customerId}/address/${addressId}`);
  }

  async addAddress(customerId: string, address: Partial<Address>): Promise<Address> {
    return this.postRequest<Address>(`/customer/${customerId}/address`, address);
  }

  async updateAddress(customerId: string, addressId: string, address: Partial<Address>): Promise<Address> {
    return this.putRequest<Address>(`/customer/${customerId}/address/${addressId}`, address);
  }

  async deleteAddress(customerId: string, addressId: string): Promise<void> {
    return this.deleteRequest(`/customer/${customerId}/address/${addressId}`);
  }

  async listCreditCards(customerId: string): Promise<CreditCardListResponse> {
    return this.getRequest<CreditCardListResponse>(`/customer/${customerId}/credit-card`);
  }

  async getCreditCard(customerId: string, cardId: string): Promise<CreditCard> {
    return this.getRequest<CreditCard>(`/customer/${customerId}/credit-card/${cardId}`);
  }

  async addCreditCard(customerId: string, creditCard: CreditCardCreateInput): Promise<CreditCard> {
    return this.postRequest<CreditCard>(`/customer/${customerId}/credit-card`, creditCard);
  }

  async updateCreditCard(customerId: string, cardId: string, updates: { isDefault: boolean }): Promise<CreditCard> {
    return this.putRequest<CreditCard>(`/customer/${customerId}/credit-card/${cardId}`, updates);
  }

  async deleteCreditCard(customerId: string, cardId: string): Promise<void> {
    return this.deleteRequest(`/customer/${customerId}/credit-card/${cardId}`);
  }
}