import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Coupon } from './types';

export class CouponsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
    code?: string;
  }): Promise<PaginatedResponse<Coupon>> {
    return this.getRequest<PaginatedResponse<Coupon>>('/coupons', params);
  }

  async get(couponId: string): Promise<Coupon> {
    return this.getRequest<Coupon>(`/coupons/${couponId}`);
  }

  async create(coupon: Partial<Coupon>): Promise<Coupon> {
    return this.postRequest<Coupon>('/coupons', coupon);
  }

  async update(couponId: string, coupon: Partial<Coupon>): Promise<Coupon> {
    return this.putRequest<Coupon>(`/coupons/${couponId}`, coupon);
  }

  async delete(couponId: string): Promise<void> {
    return this.deleteRequest(`/coupons/${couponId}`);
  }

  async getByCode(code: string): Promise<Coupon> {
    return this.getRequest<Coupon>(`/coupons/code/${code}`);
  }

  async validate(code: string, params?: {
    subtotal?: number;
    customerId?: string;
  }): Promise<Coupon> {
    return this.getRequest<Coupon>(`/coupons/validate/${code}`, params);
  }
}