import { PaginatedResponse } from '../../common/types/pagination';

export type TagObjectType = 'customer' | 'club-membership' | 'order' | 'reservation';
export type TagType = 'Manual' | 'Dynamic';
export type TagAppliesToCondition = 'All conditions' | 'One or more conditions';
export type TagConditionOperator = 'is equal to' | 'is greater than' | 'is less than';

export interface TagCondition {
  id: string;
  appliesTo: string;
  condition: TagConditionOperator;
  value: string;
}

export interface TagBackPopulate {
  currentPage: number;
  totalPages: number;
  cursor: string;
  status: 'Completed' | 'In Progress' | 'Failed';
  processDate: string;
}

export interface Tag {
  id: string;
  title: string;
  objectType: TagObjectType;
  type: TagType;
  appliesToCondition: TagAppliesToCondition | null;
  createdAt: string;
  updatedAt: string;
  conditions: TagCondition[];
  backPopulate?: TagBackPopulate;
}

export type CreateTagInput = Pick<Tag, 'title' | 'type'>;

export type UpdateTagInput = Partial<CreateTagInput>;

export type TagResponse = PaginatedResponse<Tag, 'tags'>;