import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Department } from './types';

export class DepartmentsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<Department>> {
    return this.getRequest<PaginatedResponse<Department>>('/departments', params);
  }

  async get(departmentId: string): Promise<Department> {
    return this.getRequest<Department>(`/departments/${departmentId}`);
  }

  async create(department: Partial<Department>): Promise<Department> {
    return this.postRequest<Department>('/departments', department);
  }

  async update(departmentId: string, department: Partial<Department>): Promise<Department> {
    return this.putRequest<Department>(`/departments/${departmentId}`, department);
  }

  async delete(departmentId: string): Promise<void> {
    return this.deleteRequest(`/departments/${departmentId}`);
  }
}