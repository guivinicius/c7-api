import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Tag } from './types';

export class TagsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    entityType?: string;
  }): Promise<PaginatedResponse<Tag>> {
    return this.getRequest<PaginatedResponse<Tag>>('/tags', params);
  }

  async get(tagId: string): Promise<Tag> {
    return this.getRequest<Tag>(`/tags/${tagId}`);
  }

  async create(tag: Partial<Tag>): Promise<Tag> {
    return this.postRequest<Tag>('/tags', tag);
  }

  async update(tagId: string, tag: Partial<Tag>): Promise<Tag> {
    return this.putRequest<Tag>(`/tags/${tagId}`, tag);
  }

  async delete(tagId: string): Promise<void> {
    return this.deleteRequest(`/tags/${tagId}`);
  }

  async listByEntity(entityType: string, entityId: string): Promise<Tag[]> {
    return this.getRequest<Tag[]>(`/tags/${entityType}/${entityId}`);
  }
}