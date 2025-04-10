import { ListResponse } from '../../common/types/pagination';

export type CollectionStatus = 'Available' | 'Not Available' | 'Retired';
export type CollectionType = 'Manual' | 'Automatic';

export interface CollectionSEO {
  title: string;
  description?: string | null;
}

export interface Collection {
  id: string;
  title: string;
  content?: string | null;
  type: CollectionType;
  webStatus: CollectionStatus;
  adminStatus: CollectionStatus;
  slug: string;
  featureImage?: string | null;
  createdAt: string;
  updatedAt: string;
  seo: CollectionSEO;
}

export type CollectionListResponse = ListResponse<Collection, 'collection'>;