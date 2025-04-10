import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Reservation } from './types';

export class ReservationsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
    customerId?: string;
    fromDate?: string;
    toDate?: string;
  }): Promise<PaginatedResponse<Reservation, 'reservations'>> {
    return this.getRequest<PaginatedResponse<Reservation, 'reservations'>>('/reservation', params);
  }

  async get(reservationId: string): Promise<Reservation> {
    return this.getRequest<Reservation>(`/reservation/${reservationId}`);
  }

  async create(reservation: Partial<Reservation>): Promise<Reservation> {
    return this.postRequest<Reservation>('/reservation', reservation);
  }

  async update(reservationId: string, reservation: Partial<Reservation>): Promise<Reservation> {
    return this.putRequest<Reservation>(`/reservation/${reservationId}`, reservation);
  }

  async delete(reservationId: string): Promise<void> {
    return this.deleteRequest(`/reservation/${reservationId}`);
  }

  async cancel(reservationId: string, reason?: string): Promise<Reservation> {
    return this.postRequest<Reservation>(`/reservation/${reservationId}/cancel`, { reason });
  }

  async confirm(reservationId: string): Promise<Reservation> {
    return this.postRequest<Reservation>(`/reservation/${reservationId}/confirm`, {});
  }
}