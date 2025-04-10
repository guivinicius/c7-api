import { ListResponse } from '../../common/types/pagination';

export type EmailMarketingStatus = 'Subscribed' | 'Unsubscribed';
export type Honorific = 'Mr' | 'Ms' | 'Dr';
export type NotificationType = 
  | 'Order To Be Picked Up' 
  | 'Active Club Membership Missing Address'
  | 'Active Club Membership Missing Credit Card'
  | 'Active Club Membership With Expired Card'
  | 'Card Declined On Last Club Process';

export interface CustomerEmail {
  id: string;
  email: string;
}

export interface CustomerPhone {
  id?: string;
  phone: string;
}

export interface CustomerFlag {
  id: string;
  content: string;
}

export interface CustomerNotification {
  id: string;
  type: NotificationType;
  content: string;
  objectId: string;
}

export interface OrderInformation {
  currentWebCartId?: string | null;
  lastOrderId?: string;
  lastOrderDate?: string;
  orderCount?: number;
  lifetimeValue?: number;
  rank?: number;
  rankTrend?: 'Up' | 'Down';
  grossProfit?: number;
  currentClubTitle?: string;
  daysInCurrentClub?: number;
  acquisitionChannel?: string;
}

export interface PurchaseHistory {
  product: {
    sku: string;
    image?: string;
    price: number;
    title: string;
    quantity: number;
  };
  purchaseDate: string;
}

export interface Customer {
  id: string;
  avatar?: string | null;
  honorific?: Honorific | null;
  firstName: string;
  lastName: string;
  birthDate?: string;
  city?: string;
  stateCode?: string;
  zipCode?: string;
  countryCode?: string;
  emailMarketingStatus?: EmailMarketingStatus;
  lastActivityDate?: string;
  facebookId?: string | null;
  metaData?: Record<string, any>;
  appData?: Record<string, any> | null;
  appSync?: Record<string, any> | null;
  flags?: CustomerFlag[];
  notifications?: CustomerNotification[];
  emails: CustomerEmail[];
  phones?: CustomerPhone[];
  orderInformation?: OrderInformation;
  purchaseHistory?: PurchaseHistory[];
  hasAccount?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  customerId: string;
  birthDate?: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
  address: string;
  address2?: string;
  city: string;
  stateCode: string;
  zipCode: string;
  countryCode: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerAddressListResponse {
  customerAddresses: Address[];
  total: number;
}

export interface ListAddressesResponse {
  customerAddresses: Address[];
  total: number;
}

export interface CreditCard {
  id: string;
  cardBrand: string;
  maskedCardNumber: string;
  expiryMo: number;
  expiryYr: number;
  cardHolderName: string;
  tokenOnFile: string;
  customerId: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreditCardCreateInput {
  token: string;
  isDefault?: boolean;
}

export interface CreditCardListResponse {
  customerCreditCards: CreditCard[];
  total: number;
}