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

// Re-export domain-specific types
export * from './domains/clubs/types';
export * from './domains/collections/types';
export * from './domains/coupons/types';
export * from './domains/customers/types';
export * from './domains/departments/types';
export * from './domains/gift-cards/types';
export * from './domains/inventory/types';
export * from './domains/inventory-location/types';
export * from './domains/notes/types';
export * from './domains/orders/types';
export * from './domains/products/types';
export * from './domains/promotions/types';
export * from './domains/reservations/types';
export * from './domains/shipping/types';
export * from './domains/tags/types';
export * from './domains/taxes/types';
export * from './domains/vendors/types';
export * from './domains/webhooks/types';

// Re-export common types
export * from './common/types/pagination';