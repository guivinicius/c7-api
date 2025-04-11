import { Commerce7Client } from "../client.js";

export class TaxesAPI extends Commerce7Client {
  async list() {
    return this.getRequest("/tax");
  }

  async get(taxId) {
    return this.getRequest(`/tax/${taxId}`);
  }

  async create(tax) {
    return this.postRequest("/tax", tax);
  }

  async update(taxId, tax) {
    return this.putRequest(`/tax/${taxId}`, tax);
  }

  async delete(taxId) {
    return this.deleteRequest(`/tax/${taxId}`);
  }
}
