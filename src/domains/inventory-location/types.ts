export interface InventoryLocation {
  id: string;
  title: string;
  address: string;
  address2: string | null;
  city: string;
  stateCode: string;
  zipCode: string;
  countryCode: string;
  phone: string;
  isWebShipLocation: boolean;
  isInboundShipLocation: boolean;
  isClubShipLocation: boolean;
  isAPickupLocation: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryLocationCreateInput {
  title: string;
  address: string;
  address2?: string;
  city: string;
  stateCode: string;
  zipCode: string;
  countryCode: string;
  phone: string;
  isWebShipLocation: boolean;
  isClubShipLocation: boolean;
  isAPickupLocation: boolean;
}

export interface InventoryLocationListResponse {
  inventoryLocations: InventoryLocation[];
  total: number;
}