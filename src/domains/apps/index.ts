import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { App } from './types';

export class AppsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<App>> {
    return this.getRequest<PaginatedResponse<App>>('/apps', params);
  }

  async get(appId: string): Promise<App> {
    return this.getRequest<App>(`/apps/${appId}`);
  }

  async create(app: Partial<App>): Promise<App> {
    return this.postRequest<App>('/apps', app);
  }

  async update(appId: string, app: Partial<App>): Promise<App> {
    return this.putRequest<App>(`/apps/${appId}`, app);
  }

  async delete(appId: string): Promise<void> {
    return this.deleteRequest(`/apps/${appId}`);
  }
}