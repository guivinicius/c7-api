export type PluralizeKey<T extends string> = `${T}s`;

export type PaginatedResponse<T, K extends string> = {
  [key in PluralizeKey<K>]: T[];
} & {
  total: number;
};

// Helper type to create specific resource list responses
export type ListResponse<T, K extends string> = PaginatedResponse<T, K>;

// Example usage:
// interface ProductListResponse extends ListResponse<Product, 'product'> {}
// Will create: { products: Product[]; total: number; }