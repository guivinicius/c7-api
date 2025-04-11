import { Commerce7Client } from '../../client';
import { Tag, TagResponse, CreateTagInput, UpdateTagInput, TagObjectType } from './types';

export class TagsAPI extends Commerce7Client {
  async list(objectType: TagObjectType, params?: {
    limit?: number;
    q?: string;
  }): Promise<TagResponse> {
    return this.getRequest<TagResponse>(`/tag/${objectType}`, params);
  }

  async get(objectType: TagObjectType, tagId: string): Promise<Tag> {
    return this.getRequest<Tag>(`/tag/${objectType}/${tagId}`);
  }

  async create(objectType: TagObjectType, tag: CreateTagInput): Promise<Tag> {
    return this.postRequest<Tag>(`/tag/${objectType}`, tag);
  }

  async update(objectType: TagObjectType, tagId: string, tag: UpdateTagInput): Promise<Tag> {
    return this.putRequest<Tag>(`/tag/${objectType}/${tagId}`, tag);
  }

  async delete(objectType: TagObjectType, tagId: string): Promise<void> {
    return this.deleteRequest(`/tag/${objectType}/${tagId}`);
  }
}