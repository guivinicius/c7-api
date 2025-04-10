import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Tag } from './types';

export class TagsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    entityType?: string;
  }): Promise<PaginatedResponse<Tag, 'tags'>> {
    return this.getRequest<PaginatedResponse<Tag, 'tags'>>('/tag', params);
  }

  async get(tagId: string): Promise<Tag> {
    return this.getRequest<Tag>(`/tag/${tagId}`);
  }

  async create(tag: Partial<Tag>): Promise<Tag> {
    return this.postRequest<Tag>('/tag', tag);
  }

  async update(tagId: string, tag: Partial<Tag>): Promise<Tag> {
    return this.putRequest<Tag>(`/tag/${tagId}`, tag);
  }

  async delete(tagId: string): Promise<void> {
    return this.deleteRequest(`/tag/${tagId}`);
  }
}