export type Channel = 'Inbound' | 'Web' | 'POS' | 'Club';

export type PaymentStatus = 'Paid' | 'Authorized' | 'Cancelled';

export type FulfillmentStatus = 'Fulfilled' | 'Not Fulfilled' | 'Partially Fulfilled' | 'No Fulfillment Required';

export type ShippingStatus = 'Not Tracked' | 'Pending' | 'In Transit' | 'Delivered';

export type ComplianceStatus = 'Compliant' | 'Forced' | 'Not Checked' | 'No Compliance Required' | 'Quarantined' | 'Void';

export type OrderDeliveryMethod = 'Pickup' | 'Carry Out' | 'Ship';

export type TaxSaleType = 'Offsite' | 'Onsite';

export type TenderType = 'Credit Card' | 'Cash' | 'COD' | 'External' | 'Debit' | 'Gift Card' | 'Other' | 'Alipay' | 'WeChat Pay' | 'Loyalty Points';

export type ChargeStatus = 'Pending' | 'Failed' | 'Success' | 'Waiting' | 'Cancelled';

export type ChargeType = 'Sale' | 'PreAuth' | 'Cancel' | 'Refund';

export type CardBrand = 'Visa' | 'MasterCard' | 'American Express' | 'Discover' | 'JCB' | 'Diners Club' | 'Union Pay' | 'Maestro' | 'Unknown';

export type PurchaseType = 'Refund' | 'Exchange' | 'Pickup To Ship' | 'Regular' | 'Corporate Order';

export interface OrderShippingService {
  id: string;
  title: string;
  code: string;
  service: string;
  shippingServiceId: string;
  price: number;
  originalPrice: number;
  isQualifiesForPrime: boolean;
  tax: number;
}

export interface OrderAddress {
  id: string;
  customerAddressId: string;
  birthDate: string;
  honorific: string | null;
  firstName: string;
  lastName: string;
  company: string | null;
  phone: string;
  address: string;
  address2: string | null;
  city: string;
  stateCode: string;
  zipCode: string;
  countryCode: string;
}

export interface OrderTax {
  id: string;
  vendor: string;
  title: string;
  countryCode: string;
  stateCode: string | null;
  freight: number;
  food: number;
  generalMerchandise: number;
  cannabis: number;
  wine: number;
  price: number;
  isIncludedInPrice: boolean;
  isNonTaxable: boolean;
}

export interface OrderCreditCard {
  gateway: string;
  cardBrand: CardBrand;
  maskedCardNumber: string;
  expiryMo: number;
  expiryYr: number;
  cardHolderName: string;
  oneTimeToken: string | null;
  tokenOnFile: string;
  processorResponse: string | null;
  authorizationId: string;
  customerCreditCardId: string;
}

export interface Tender {
  id: string;
  refundId: string | null;
  previousTenderId: string | null;
  tenderType: TenderType;
  chargeType: ChargeType;
  chargeStatus: ChargeStatus;
  amountTendered: number;
  tip: number;
  errorCode: string;
  paymentDate: string;
  createdAt: string;
  updatedAt: string;
  creditCard?: OrderCreditCard;
}

export interface OrderItem {
  id: string;
  productTitle: string;
  type: string;
  inventoryLocationId: string | null;
  productId: string;
  productVariantTitle: string;
  productVariantId: string;
  image: string;
  sku: string;
  costOfGood: number;
  price: number;
  originalPrice: number;
  comparePrice: number;
  bottleDeposit: number;
  quantity: number;
  quantityFulfilled: number;
  isPriceOverride: boolean;
  tax: number;
  taxType: string;
  weight: number;
  hasShipping: boolean;
  vendor: string | null;
  volumeInML: number;
  departmentCode: string;
  allocationId: string | null;
  departmentId: string;
  collectionIds: string;
}

export interface Order {
  id: string;
  orderSubmittedDate: string;
  orderPaidDate: string;
  orderNumber: number;
  orderSource: string;
  previousOrderId: string | null;
  previousOrderNumber: string | null;
  linkedOrders: string[];
  paymentStatus: PaymentStatus;
  complianceStatus: ComplianceStatus;
  fulfillmentStatus: FulfillmentStatus;
  cartId: string;
  channel: Channel;
  posProfileId: string | null;
  customerId: string;
  orderDeliveryMethod: OrderDeliveryMethod;
  shippingInstructions: string | null;
  taxSaleType: TaxSaleType;
  subTotal: number;
  shipTotal: number;
  taxTotal: number;
  dutyTotal: number;
  bottleDepositTotal: number;
  tipTotal: number;
  total: number;
  totalAfterTip: number;
  giftMessage: string | null;
  allowPromotions: boolean;
  flags: string[];
  productTenantId: string | null;
  isNonTaxable: boolean;
  createdAt: string;
  updatedAt: string;
  club: any | null;
  shipping: OrderShippingService[];
  coupons: any[];
  shipTo: OrderAddress;
  billTo: OrderAddress;
  pickupBy: any | null;
  carryOut: any | null;
  promotions: any[];
  tenders: Tender[];
  items: OrderItem[];
  fulfillments: any[];
  taxes: OrderTax[];
  duties: any[];
  selectedShippingOptions: {
    shippingServiceId: string | null;
  };
}