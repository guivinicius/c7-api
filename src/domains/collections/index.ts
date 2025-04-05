import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Collection } from './types';

export class CollectionsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<Collection>> {
    return this.getRequest<PaginatedResponse<Collection>>('/collections', params);
  }

  async get(collectionId: string): Promise<Collection> {
    return this.getRequest<Collection>(`/collections/${collectionId}`);
  }

  async create(collection: Partial<Collection>): Promise<Collection> {
    return this.postRequest<Collection>('/collections', collection);
  }

  async update(collectionId: string, collection: Partial<Collection>): Promise<Collection> {
    return this.putRequest<Collection>(`/collections/${collectionId}`, collection);
  }

  async delete(collectionId: string): Promise<void> {
    return this.deleteRequest(`/collections/${collectionId}`);
  }

  async getByHandle(handle: string): Promise<Collection> {
    return this.getRequest<Collection>(`/collections/handle/${handle}`);
  }
}