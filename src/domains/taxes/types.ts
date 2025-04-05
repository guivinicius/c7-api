export interface Tax {
  id: string;
  name: string;
  rate: number;
  country: string;
  region?: string;
  createdAt: string;
  updatedAt: string;
}