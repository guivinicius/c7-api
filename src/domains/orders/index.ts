import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Order } from './types';

export class OrdersAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
    id?: string;
    customerId?: string;
    orderTagId?: string;
    posProfileId?: string;
    tagId?: string;
    allocationId?: string;
    queryId?: string;
    updatedAt?: string;
    orderPaidDate?: string;
    orderFulfilledDate?: string;
    orderSubmittedDate?: string;
    fulfillmentStatus?: 'Fulfilled' | 'Not Fulfilled' | 'Partially Fulfilled' | 'No Fulfillment Required';
    complianceStatus?: 'Compliant' | 'Forced' | 'Not Checked' | 'No Compliance Required' | 'Quarantined' | 'Void';
    channel?: 'Inbound' | 'Web' | 'POS' | 'Club';
    orderDeliveryMethod?: 'Pickup' | 'Carry Out' | 'Ship';
  }): Promise<PaginatedResponse<Order, 'orders'>> {
    return this.getRequest<PaginatedResponse<Order, 'orders'>>('/order', params);
  }

  async get(orderId: string): Promise<Order> {
    return this.getRequest<Order>(`/order/${orderId}`);
  }

  async create(order: Partial<Order>): Promise<Order> {
    return this.postRequest<Order>('/order', order);
  }

  async updateStartingOrderNumber(startingOrderNumber: number): Promise<Order> {
    return this.putRequest<Order>('/order-number', { orderNumber: startingOrderNumber });
  }
}