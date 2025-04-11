import { PaginatedResponse } from '../../common/types/pagination';

export interface ShippingRegion {
  id: string;
  countryCode: string;
  stateCode: string | null;
}

export interface ShippingRate {
  id: string;
  toWeight: number;
  price: number;
  weightUnits: string;
}

export interface TopRate {
  id: string;
  isWrapShipping: boolean;
  forEveryXWeight: number | null;
  weightUnits: string | null;
  price: number | null;
}

export interface ShippingServiceProvider {
  id: string;
  title: string;
  code: string;
  carrier?: string;
  isActive: boolean;
  isDefault: boolean;
  sortOrder: number;
  rates: ShippingRate[];
  topRate: TopRate;
}

export interface Shipping {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  regions: ShippingRegion[];
  services: ShippingServiceProvider[];
}

export type CreateShippingInput = Omit<Shipping, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateShippingInput = Partial<CreateShippingInput>;

export type ShippingResponse = PaginatedResponse<Shipping, 'shippings'>;