import { Commerce7Client } from "../client.js";

export class ReservationsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/reservation", params);
  }

  async get(reservationId) {
    return this.getRequest(`/reservation/${reservationId}`);
  }

  async create(reservation) {
    return this.postRequest("/reservation", reservation);
  }

  async update(reservationId, reservation) {
    return this.putRequest(`/reservation/${reservationId}`, reservation);
  }

  async delete(reservationId) {
    return this.deleteRequest(`/reservation/${reservationId}`);
  }

  async cancel(reservationId, reason) {
    return this.postRequest(`/reservation/${reservationId}/cancel`, { reason });
  }

  async confirm(reservationId) {
    return this.postRequest(`/reservation/${reservationId}/confirm`, {});
  }
}
