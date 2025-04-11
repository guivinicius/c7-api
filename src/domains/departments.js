import { Commerce7Client } from "../client.js";

export class DepartmentsAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/department", params);
  }

  async get(departmentId) {
    return this.getRequest(`/department/${departmentId}`);
  }

  async create(department) {
    return this.postRequest("/department", department);
  }

  async update(departmentId, department) {
    return this.putRequest(`/department/${departmentId}`, department);
  }

  async delete(departmentId) {
    return this.deleteRequest(`/department/${departmentId}`);
  }
}
