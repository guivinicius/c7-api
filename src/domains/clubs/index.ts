import { Commerce7Client } from '../../client';
import { Club, ClubListResponse } from './types';

export class ClubsAPI extends Commerce7Client {
  async list(params?: {
    limit?: number;
    q?: string;
  }): Promise<ClubListResponse> {
    return this.getRequest<ClubListResponse>('/club', params);
  }

  async get(clubId: string): Promise<Club> {
    return this.getRequest<Club>(`/club/${clubId}`);
  }

  async create(club: Partial<Club>): Promise<Club> {
    return this.postRequest<Club>('/club', club);
  }

  async update(clubId: string, club: Partial<Club>): Promise<Club> {
    return this.putRequest<Club>(`/club/${clubId}`, club);
  }

  async delete(clubId: string): Promise<void> {
    return this.deleteRequest(`/club/${clubId}`);
  }
}