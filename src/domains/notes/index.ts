import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Note } from './types';

export class NotesAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    entityId?: string;
    entityType?: string;
  }): Promise<PaginatedResponse<Note>> {
    return this.getRequest<PaginatedResponse<Note>>('/notes', params);
  }

  async get(noteId: string): Promise<Note> {
    return this.getRequest<Note>(`/notes/${noteId}`);
  }

  async create(note: Partial<Note>): Promise<Note> {
    return this.postRequest<Note>('/notes', note);
  }

  async update(noteId: string, note: Partial<Note>): Promise<Note> {
    return this.putRequest<Note>(`/notes/${noteId}`, note);
  }

  async delete(noteId: string): Promise<void> {
    return this.deleteRequest(`/notes/${noteId}`);
  }

  async listByEntity(entityType: string, entityId: string, params?: {
    offset?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Note>> {
    return this.getRequest<PaginatedResponse<Note>>(`/notes/${entityType}/${entityId}`, params);
  }
}