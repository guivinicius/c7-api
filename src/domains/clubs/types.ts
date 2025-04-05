export interface Club {
  id: string;
  name: string;
  description?: string;
  status: string;
  type: string;
  price: number;
  frequency: 'monthly' | 'quarterly' | 'yearly';
  createdAt: string;
  updatedAt: string;
}