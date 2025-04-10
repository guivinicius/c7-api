import { ListResponse } from '../../common/types/pagination';

export type ProductType = 'Wine' | 'Spirit' | 'Beer' | 'Food' | 'Merchandise' | 'Experience' | 'Other';
export type ProductStatus = 'Available' | 'Unavailable' | 'Hidden' | 'Coming Soon' | 'Sold Out';
export type WineType = 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Dessert';
export type SecurityAvailability = 'Public' | 'Private' | 'Members Only';
export type InventoryPolicy = 'Sell' | 'Dont Sell';

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
  taxType: string;
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
  bundleItems: any[]; // Can be typed more specifically if bundle structure is known
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