export type WebhookObject = 
  | 'Allocation'
  | 'Cart' 
  | 'Club'
  | 'Club Package'
  | 'Club Membership'
  | 'Collection'
  | 'Customer'
  | 'Customer Address'
  | 'Customer Credit Card'
  | 'Coupon'
  | 'Group'
  | 'Product'
  | 'Promotion'
  | 'Order'
  | 'Reservation'
  | 'Tag'
  | 'Transaction Email'
  | 'User';

export type WebhookAction = 
  | 'Create'
  | 'Update'
  | 'Bulk Update'
  | 'Delete'
  | 'Send';

export interface Webhook {
  id: string;
  object: WebhookObject;
  action: WebhookAction;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface WebhookInput {
  object: WebhookObject;
  action: WebhookAction;
  url: string;
}