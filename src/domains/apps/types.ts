export interface App {
  id: string;
  name: string;
  description?: string;
  status: string;
  scopes: string[];
  webhookUrl?: string;
  createdAt: string;
  updatedAt: string;
}