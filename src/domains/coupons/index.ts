import { Commerce7Client } from '../../client';
import { Coupon, CouponListResponse } from './types';

export class CouponsAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
  }): Promise<CouponListResponse> {
    return this.getRequest<CouponListResponse>('/coupon', params);
  }

  async get(couponId: string): Promise<Coupon> {
    return this.getRequest<Coupon>(`/coupon/${couponId}`);
  }

  async create(coupon: Partial<Coupon>): Promise<Coupon> {
    return this.postRequest<Coupon>('/coupon', coupon);
  }

  async update(couponId: string, coupon: Partial<Coupon>): Promise<Coupon> {
    return this.putRequest<Coupon>(`/coupon/${couponId}`, coupon);
  }

  async delete(couponId: string): Promise<void> {
    return this.deleteRequest(`/coupon/${couponId}`);
  }
}