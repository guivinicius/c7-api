import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { 
  Order, 
  FulfillmentStatus, 
  ComplianceStatus, 
  Channel, 
  OrderDeliveryMethod 
} from './types';

export interface OrderListParams {
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
  fulfillmentStatus?: FulfillmentStatus;
  complianceStatus?: ComplianceStatus;
  channel?: Channel;
  orderDeliveryMethod?: OrderDeliveryMethod;
}

export class OrdersAPI extends Commerce7Client {
  async list(params?: OrderListParams): Promise<PaginatedResponse<Order, 'orders'>> {
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