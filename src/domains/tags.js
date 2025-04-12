import { Commerce7Client } from "../client.js";

export class TagsAPI extends Commerce7Client {
  async list(objectType, params) {
    return this.getRequest(`/tag/${objectType}`, params);
  }

  async get(objectType, tagId) {
    return this.getRequest(`/tag/${objectType}/${tagId}`);
  }

  async create(objectType, tag) {
    return this.postRequest(`/tag/${objectType}`, tag);
  }

  async update(objectType, tagId, tag) {
    return this.putRequest(`/tag/${objectType}/${tagId}`, tag);
  }

  async delete(objectType, tagId) {
    return this.deleteRequest(`/tag/${objectType}/${tagId}`);
  }
}
