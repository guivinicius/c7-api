import { Commerce7Client } from "../client.js";

export class CollectionsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/collection", params);
  }

  async get(collectionId) {
    return this.getRequest(`/collection/${collectionId}`);
  }

  async create(collection) {
    return this.postRequest("/collection", collection);
  }

  async update(collectionId, collection) {
    return this.putRequest(`/collection/${collectionId}`, collection);
  }

  async delete(collectionId) {
    return this.deleteRequest(`/collection/${collectionId}`);
  }
}
