// Re-export base client
export * from './client';

// Re-export all domain APIs
export * from './domains/clubs';
export * from './domains/collections';
export * from './domains/coupons';
export * from './domains/customers';
export * from './domains/departments';
export * from './domains/gift-cards';
export * from './domains/inventory';
export * from './domains/inventory-location';
export * from './domains/notes';
export * from './domains/orders';
export * from './domains/products';
export * from './domains/promotions';
export * from './domains/reservations';
export * from './domains/shipping';
export * from './domains/tags';
export * from './domains/taxes';
export * from './domains/vendors';
export * from './domains/webhooks';

// Re-export domain-specific types with explicit naming
export type {
  CustomerAddress,
  CustomerCreditCard,
  CustomerAddressListResponse,
  ListAddressesResponse,
  CreditCardCreateInput,
  CreditCardListResponse
} from './domains/customers/types';

export type {
  OrderAddress,
  OrderCreditCard,
  OrderShippingService,
  OrderTax,
  Order,
  OrderItem,
  Tender
} from './domains/orders/types';

export type {
  ShippingServiceProvider,
  ShippingRegion,
  ShippingRate,
  TopRate,
  Shipping,
  ShippingResponse
} from './domains/shipping/types';

export type {
  Tax,
  CreateTaxInput,
  UpdateTaxInput,
  TaxResponse
} from './domains/taxes/types';

// Re-export common types
export * from './common/types/pagination';