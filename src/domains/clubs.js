import { Commerce7Client } from "../client.js";

export class ClubsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/club", params);
  }

  async get(clubId) {
    return this.getRequest(`/club/${clubId}`);
  }

  async create(club) {
    return this.postRequest("/club", club);
  }

  async update(clubId, club) {
    return this.putRequest(`/club/${clubId}`, club);
  }

  async delete(clubId) {
    return this.deleteRequest(`/club/${clubId}`);
  }
}
