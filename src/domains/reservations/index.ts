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
  }): Promise<PaginatedResponse<Reservation>> {
    return this.getRequest<PaginatedResponse<Reservation>>('/reservations', params);
  }

  async get(reservationId: string): Promise<Reservation> {
    return this.getRequest<Reservation>(`/reservations/${reservationId}`);
  }

  async create(reservation: Partial<Reservation>): Promise<Reservation> {
    return this.postRequest<Reservation>('/reservations', reservation);
  }

  async update(reservationId: string, reservation: Partial<Reservation>): Promise<Reservation> {
    return this.putRequest<Reservation>(`/reservations/${reservationId}`, reservation);
  }

  async delete(reservationId: string): Promise<void> {
    return this.deleteRequest(`/reservations/${reservationId}`);
  }

  async cancel(reservationId: string, reason?: string): Promise<Reservation> {
    return this.postRequest<Reservation>(`/reservations/${reservationId}/cancel`, { reason });
  }

  async confirm(reservationId: string): Promise<Reservation> {
    return this.postRequest<Reservation>(`/reservations/${reservationId}/confirm`, {});
  }
}