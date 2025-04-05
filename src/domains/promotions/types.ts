export interface Promotion {
  id: string;
  name: string;
  description?: string;
  type: string;
  value: number;
  status: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}