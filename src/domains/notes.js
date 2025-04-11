import { Commerce7Client } from "../client.js";

export class NotesAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/note", params);
  }

  async get(noteId) {
    return this.getRequest(`/note/${noteId}`);
  }

  async create(note) {
    return this.postRequest("/note", note);
  }

  async update(noteId, note) {
    return this.putRequest(`/note/${noteId}`, note);
  }

  async delete(noteId) {
    return this.deleteRequest(`/note/${noteId}`);
  }

  async listByEntity(entityType, entityId) {
    return this.getRequest("/note", { entityType, entityId });
  }
}
