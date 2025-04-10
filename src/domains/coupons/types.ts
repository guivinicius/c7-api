import { ListResponse } from '../../common/types/pagination';

export type CouponStatus = 'Enabled' | 'Disabled';
export type UsageLimitType = 'Unlimited' | 'Limited';
export type DiscountType = 'Dollar Off' | 'Percentage Off' | 'No Discount';
export type AppliesTo = 'Store' | 'Products' | 'Collections';
export type AvailableTo = 'Everyone' | 'Members' | 'Specific Customers';

export interface Coupon {
  id: string;
  code: string;
  title: string;
  actionMessage?: string | null;
  usageLimitType: UsageLimitType;
  usageLimit?: number | null;
  appliesTo: AppliesTo;
  appliesToObjectIds?: string[] | null;
  productDiscountType: DiscountType;
  productDiscount: number;
  shippingDiscountType: DiscountType;
  shippingDiscount?: number | null;
  startDate: string;
  endDate?: string | null;
  status: CouponStatus;
  minimumCartAmount?: number | null;
  availableTo: AvailableTo;
  availableToObjectIds?: string[] | null;
  promotionSets: any[];
  createdAt: string;
  updatedAt: string;
}

export type CouponListResponse = ListResponse<Coupon, 'coupon'>;