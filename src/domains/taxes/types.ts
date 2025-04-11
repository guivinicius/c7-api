import { PaginatedResponse } from '../../common/types/pagination';

export type TaxCalculationType = 'Added' | 'Instead Of';

export interface Tax {
  id: string;
  title: string;
  countryCode: string;
  stateCode: string | null;
  freight: number;
  food: number;
  generalMerchandise: number;
  wine: number;
  taxCalculation: TaxCalculationType;
  createdAt: string;
  updatedAt: string;
}

export type CreateTaxInput = Pick<Tax, 'title' | 'countryCode' | 'stateCode' | 'freight' | 'food' | 'generalMerchandise' | 'wine' | 'taxCalculation'>;

export type UpdateTaxInput = Partial<CreateTaxInput>;

export type TaxResponse = PaginatedResponse<Tax, 'taxes'>;