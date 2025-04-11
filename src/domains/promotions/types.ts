export type PromotionDiscountType = 'Dollar Off' | 'Percentage Off' | 'No Discount';
export type PromotionUsageLimitType = 'Unlimited' | 'Limited';
export type PromotionAppliesTo = 'Store' | 'Product' | 'Category';
export type PromotionStatus = 'Enabled' | 'Disabled';
export type PromotionAvailableTo = 'Everyone' | 'Members' | 'Specific Customers';

export interface PromotionSet {
  id: string;
}

export interface Promotion {
  id: string;
  title: string;
  actionMessage: string | null;
  usageLimitType: PromotionUsageLimitType;
  usageLimit: number | null;
  appliesTo: PromotionAppliesTo;
  appliesToObjectIds: string[] | null;
  productDiscountType: PromotionDiscountType;
  productDiscount: number;
  shippingDiscountType: PromotionDiscountType;
  shippingDiscount: number | null;
  startDate: string;
  endDate: string | null;
  status: PromotionStatus;
  minimumCartAmount: number | null;
  availableTo: PromotionAvailableTo;
  availableToObjectIds: string[] | null;
  createdAt: string;
  updatedAt: string;
  promotionSets: PromotionSet[];
}