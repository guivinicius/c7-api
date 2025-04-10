import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Note } from './types';

export class NotesAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
    customerId?: string;
    orderId?: string;
  }): Promise<PaginatedResponse<Note, 'note'>> {
    return this.getRequest<PaginatedResponse<Note, 'note'>>('/note', params);
  }

  async get(noteId: string): Promise<Note> {
    return this.getRequest<Note>(`/note/${noteId}`);
  }

  async create(note: Partial<Note>): Promise<Note> {
    return this.postRequest<Note>('/note', note);
  }

  async update(noteId: string, note: Partial<Note>): Promise<Note> {
    return this.putRequest<Note>(`/note/${noteId}`, note);
  }

  async delete(noteId: string): Promise<void> {
    return this.deleteRequest(`/note/${noteId}`);
  }
}