import { Commerce7Client } from '../../client';
import { Collection, CollectionListResponse, CollectionStatus } from './types';

export class CollectionsAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
    webStatus?: CollectionStatus;
  }): Promise<CollectionListResponse> {
    return this.getRequest<CollectionListResponse>('/collection', params);
  }

  async get(collectionId: string): Promise<Collection> {
    return this.getRequest<Collection>(`/collection/${collectionId}`);
  }

  async create(collection: Partial<Collection>): Promise<Collection> {
    return this.postRequest<Collection>('/collection', collection);
  }

  async update(collectionId: string, collection: Partial<Collection>): Promise<Collection> {
    return this.putRequest<Collection>(`/collection/${collectionId}`, collection);
  }

  async delete(collectionId: string): Promise<void> {
    return this.deleteRequest(`/collection/${collectionId}`);
  }

  async getBySlug(slug: string): Promise<Collection> {
    const response = await this.list({ q: slug });
    const collection = response.collections.find(c => c.slug === slug);
    if (!collection) {
      throw new Error(`Collection with slug ${slug} not found`);
    }
    return collection;
  }
}