import { ListResponse } from '../../common/types/pagination';

export type ProductType = 
  | 'General Merchandise' 
  | 'Tasting' 
  | 'Wine' 
  | 'Cannabis' 
  | 'Bundle' 
  | 'Reservation' 
  | 'Event Ticket' 
  | 'Gift Card' 
  | 'Collateral' 
  | 'Rebate';

export type ProductStatus = 'Available' | 'Not Available' | 'Hidden' | 'Retired';

export type WineType = 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Dessert';

export type SecurityAvailability = 'Public' | 'Allocation' | 'Group' | 'Club';

export type SecurityDisplayOption = 'Display Product / Show Login' | 'Dont Display Product';

export type InventoryPolicy = 'Back Order' | 'Dont Sell';

export type TaxType = 'Food' | 'General Merchandise' | 'Wine' | 'Not Taxable' | 'Cannabis';

export interface ProductImage {
  id: string;
  src: string;
  sortOrder: number;
}

export interface ProductInventory {
  reserveCount: number;
  allocatedCount: number;
  productVariantId: string;
  inventoryLocationId: string;
  availableForSaleCount: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  sku?: string;
  upcCode?: string;
  volumeInML?: number;
  costOfGood?: number;
  price: number;
  comparePrice?: number;
  bottleDeposit: number;
  sortOrder: number;
  hasInventory: boolean;
  inventoryPolicy: InventoryPolicy;
  hasShipping: boolean;
  taxType: TaxType;
  weight: number;
  inventory: ProductInventory[];
}

export interface ProductCollection {
  id: string;
  title: string;
  content: string;
  publishDate: string;
  slug: string;
  productTemplateId?: string;
  type: string;
  productCount?: number;
  appliesToCondition?: any;
  onlyShowProductsWithInventory: boolean;
  createdAt: string;
  updatedAt: string;
  seo: {
    title: string;
    description?: string;
  };
}

export interface ProductWineDetails {
  type: WineType;
  varietal: string;
  countryCode: string;
  region: string;
  appellation?: string;
  vintage?: number;
}

export interface ProductSecurity {
  availableTo: SecurityAvailability;
}

export interface ProductOperatingRegions {
  isOverride: boolean;
  operatingStateCodes?: string[];
  operatingCountryCodes?: string[];
}

export interface Product {
  id: string;
  title: string;
  subTitle?: string;
  image?: string;
  type: ProductType;
  departmentId?: string;
  vendorId?: string;
  teaser?: string;
  content?: string;
  webStatus: ProductStatus;
  adminStatus: ProductStatus;
  slug: string;
  metaData?: Record<string, string>;
  productTemplateId?: string;
  createdAt: string;
  updatedAt: string;
  images: ProductImage[];
  bundleItems: any[];
  variants: ProductVariant[];
  tenantIds: string[];
  collections: ProductCollection[];
  seo: {
    title: string;
    description?: string;
  };
  wine?: ProductWineDetails;
  security: ProductSecurity;
  overrideOperatingRegions: ProductOperatingRegions;
}

export type ProductListResponse = ListResponse<Product, 'product'>;