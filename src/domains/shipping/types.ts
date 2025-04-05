export interface ShippingZone {
  id: string;
  name: string;
  countries: string[];
  regions?: string[];
  rates: ShippingRate[];
  createdAt: string;
  updatedAt: string;
}

export interface ShippingRate {
  id: string;
  name: string;
  price: number;
  conditions?: ShippingCondition[];
}

export interface ShippingCondition {
  field: string;
  operator: string;
  value: number;
}