import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Club } from './types';

export class ClubsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
    type?: string;
  }): Promise<PaginatedResponse<Club>> {
    return this.getRequest<PaginatedResponse<Club>>('/clubs', params);
  }

  async get(clubId: string): Promise<Club> {
    return this.getRequest<Club>(`/clubs/${clubId}`);
  }

  async create(club: Partial<Club>): Promise<Club> {
    return this.postRequest<Club>('/clubs', club);
  }

  async update(clubId: string, club: Partial<Club>): Promise<Club> {
    return this.putRequest<Club>(`/clubs/${clubId}`, club);
  }

  async delete(clubId: string): Promise<void> {
    return this.deleteRequest(`/clubs/${clubId}`);
  }
}