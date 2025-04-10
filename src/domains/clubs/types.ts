import { ListResponse } from '../../common/types/pagination';

export type ClubType = 'Traditional' | 'Subscription';
export type ClubStatus = 'Available' | 'Not Available';

export interface Club {
  id: string;
  title: string;
  type: ClubType;
  content?: string | null;
  publishDate: string;
  slug: string;
  webStatus?: ClubStatus;
  adminStatus?: ClubStatus;
  createdAt: string;
  updatedAt: string;
  seo: {
    title: string;
    description?: string | null;
  };
}

export type ClubListResponse = ListResponse<Club, 'club'>;