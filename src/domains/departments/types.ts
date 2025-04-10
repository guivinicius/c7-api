export interface Department {
  id: string;
  title: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDepartmentInput {
  title: string;
  code: string;
}