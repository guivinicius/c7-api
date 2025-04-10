import { Commerce7Client } from '../../client';
import { PaginatedResponse } from '../../common/types/pagination';
import { Department, CreateDepartmentInput } from './types';

export class DepartmentsAPI extends Commerce7Client {
  async list(params?: {
    offset?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponse<Department, 'departments'>> {
    return this.getRequest<PaginatedResponse<Department, 'departments'>>('/department', params);
  }

  async get(departmentId: string): Promise<Department> {
    return this.getRequest<Department>(`/department/${departmentId}`);
  }

  async create(department: CreateDepartmentInput): Promise<Department> {
    return this.postRequest<Department>('/department', department);
  }

  async update(departmentId: string, department: Partial<Department>): Promise<Department> {
    return this.putRequest<Department>(`/department/${departmentId}`, department);
  }

  async delete(departmentId: string): Promise<void> {
    return this.deleteRequest(`/department/${departmentId}`);
  }
}