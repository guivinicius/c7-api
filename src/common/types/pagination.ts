export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    count: number;
    offset: number;
  };
}