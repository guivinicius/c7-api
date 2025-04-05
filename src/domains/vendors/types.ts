export interface Vendor {
  id: string;
  name: string;
  description?: string;
  status: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  createdAt: string;
  updatedAt: string;
}