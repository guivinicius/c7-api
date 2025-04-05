import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Order } from './types';

export class OrdersAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    query?: string;
    status?: string;
    customerId?: string;
    fromDate?: string;
    toDate?: string;
  }): Promise<PaginatedResponse<Order>> {
    return this.getRequest<PaginatedResponse<Order>>('/orders', params);
  }

  async get(orderId: string): Promise<Order> {
    return this.getRequest<Order>(`/orders/${orderId}`);
  }

  async create(order: Partial<Order>): Promise<Order> {
    return this.postRequest<Order>('/orders', order);
  }

  async update(orderId: string, order: Partial<Order>): Promise<Order> {
    return this.putRequest<Order>(`/orders/${orderId}`, order);
  }

  async delete(orderId: string): Promise<void> {
    return this.deleteRequest(`/orders/${orderId}`);
  }

  async getByNumber(orderNumber: string): Promise<Order> {
    return this.getRequest<Order>(`/orders/number/${orderNumber}`);
  }

  async cancel(orderId: string): Promise<Order> {
    return this.postRequest<Order>(`/orders/${orderId}/cancel`, {});
  }

  async refund(orderId: string, amount: number, reason?: string): Promise<Order> {
    return this.postRequest<Order>(`/orders/${orderId}/refund`, { amount, reason });
  }
}