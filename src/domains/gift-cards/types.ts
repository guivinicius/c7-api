export type GiftCardType = 'Virtual' | 'Physical';
export type GiftCardStatus = 'Active' | 'Inactive' | 'Expired' | 'Redeemed';

export interface GiftCard {
  id: string;
  title: string;
  type: GiftCardType;
  status: GiftCardStatus;
  giftCardNumber: number;
  code: string;
  initialAmount: number;
  currentBalance: number;
  expiryDate: string | null;
  recipientEmail: string | null;
  fromName: string | null;
  giftMessage: string | null;
  notes: string | null;
  productId: string | null;
  purchasedOnOrderId: string | null;
  purchasedOnOrderNumber: string | null;
  customerId: string | null;
  customer: unknown | null;
  createdAt: string;
  updatedAt: string;
}