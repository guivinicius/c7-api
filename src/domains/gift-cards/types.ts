export interface GiftCard {
  id: string;
  code: string;
  balance: number;
  initialBalance: number;
  status: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}