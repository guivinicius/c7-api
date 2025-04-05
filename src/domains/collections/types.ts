export interface Collection {
  id: string;
  name: string;
  handle: string;
  description?: string;
  status: string;
  rules: CollectionRule[];
  createdAt: string;
  updatedAt: string;
}

export interface CollectionRule {
  field: string;
  operator: string;
  value: string;
}