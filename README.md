# Commerce7 API Wrapper

A TypeScript wrapper for the Commerce7 API that works in both Node.js and browser environments.

## Installation

```bash
npm install @your-org/commerce7-api
```

## Environment Support

This package works in:
- Node.js (using built-in http/https modules)
- Browsers (using fetch API)
- React Native (using fetch API)

The appropriate HTTP client will be automatically selected based on the runtime environment.

## Usage

You can configure the client either through environment variables (Node.js only) or direct configuration.

### Using Environment Variables (Node.js)

Create a `.env` file with your Commerce7 credentials:

```env
COMMERCE7_TENANT_ID=your_tenant_id
COMMERCE7_CLIENT_ID=your_client_id
COMMERCE7_CLIENT_SECRET=your_client_secret
COMMERCE7_API_VERSION=v1  # Optional, defaults to v1
```

Then initialize the client without any configuration:

```typescript
import { Commerce7 } from '@your-org/commerce7-api';

// Will automatically use environment variables
const client = new Commerce7();
```

### Using Direct Configuration (Node.js or Browser)

Pass the configuration directly:

```typescript
import { Commerce7 } from '@your-org/commerce7-api';

const client = new Commerce7({
  tenantId: 'your-tenant-id',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  apiVersion: 'v2' // Optional, defaults to v1
});
```

## Available APIs

### Apps API
- `list()`: List all apps
- `get(appId)`: Get a specific app
- `create(app)`: Create a new app
- `update(appId, app)`: Update an app
- `delete(appId)`: Delete an app

### Clubs API
- `list()`: List all clubs
- `get(clubId)`: Get a specific club
- `create(club)`: Create a new club
- `update(clubId, club)`: Update a club
- `delete(clubId)`: Delete a club

### Collections API
- `list()`: List all collections
- `get(collectionId)`: Get a specific collection
- `create(collection)`: Create a new collection
- `update(collectionId, collection)`: Update a collection
- `delete(collectionId)`: Delete a collection
- `getByHandle(handle)`: Get a collection by its handle

### Coupons API
- `list()`: List all coupons
- `get(couponId)`: Get a specific coupon
- `create(coupon)`: Create a new coupon
- `update(couponId, coupon)`: Update a coupon
- `delete(couponId)`: Delete a coupon
- `getByCode(code)`: Get a coupon by its code
- `validate(code, params)`: Validate a coupon code

### Customers API
- `list()`: List all customers
- `get(customerId)`: Get a specific customer
- `create(customer)`: Create a new customer
- `update(customerId, customer)`: Update a customer
- `delete(customerId)`: Delete a customer
- `addAddress(customerId, address)`: Add an address to a customer
- `updateAddress(customerId, addressId, address)`: Update a customer's address
- `deleteAddress(customerId, addressId)`: Delete a customer's address

### Departments API
- `list()`: List all departments
- `get(departmentId)`: Get a specific department
- `create(department)`: Create a new department
- `update(departmentId, department)`: Update a department
- `delete(departmentId)`: Delete a department

### Gift Cards API
- `list()`: List all gift cards
- `get(giftCardId)`: Get a specific gift card
- `create(giftCard)`: Create a new gift card
- `update(giftCardId, giftCard)`: Update a gift card
- `delete(giftCardId)`: Delete a gift card
- `getByCode(code)`: Get a gift card by its code
- `redeem(giftCardId, amount)`: Redeem a gift card

### Inventory API
- `list()`: List all inventory levels
- `get(inventoryId)`: Get a specific inventory level
- `adjust(inventoryId, quantity, reason?)`: Adjust inventory level
- `getByProductVariant(productId, variantId, locationId?)`: Get inventory by product variant

### Notes API
- `list()`: List all notes
- `get(noteId)`: Get a specific note
- `create(note)`: Create a new note
- `update(noteId, note)`: Update a note
- `delete(noteId)`: Delete a note
- `listByEntity(entityType, entityId)`: List notes for a specific entity

### Orders API
- `list()`: List all orders
- `get(orderId)`: Get a specific order
- `create(order)`: Create a new order
- `update(orderId, order)`: Update an order
- `delete(orderId)`: Delete an order
- `getByNumber(orderNumber)`: Get an order by its number
- `cancel(orderId)`: Cancel an order
- `refund(orderId, amount, reason?)`: Refund an order

### Products API
- `list()`: List all products
- `get(productId)`: Get a specific product
- `create(product)`: Create a new product
- `update(productId, product)`: Update a product
- `delete(productId)`: Delete a product
- `getByHandle(handle)`: Get a product by its handle

### Promotions API
- `list()`: List all promotions
- `get(promotionId)`: Get a specific promotion
- `create(promotion)`: Create a new promotion
- `update(promotionId, promotion)`: Update a promotion
- `delete(promotionId)`: Delete a promotion
- `validate(promotionId, params)`: Validate a promotion

### Reservations API
- `list()`: List all reservations
- `get(reservationId)`: Get a specific reservation
- `create(reservation)`: Create a new reservation
- `update(reservationId, reservation)`: Update a reservation
- `delete(reservationId)`: Delete a reservation
- `cancel(reservationId, reason?)`: Cancel a reservation
- `confirm(reservationId)`: Confirm a reservation

### Shipping API
- `list()`: List all shipping zones
- `get(zoneId)`: Get a specific shipping zone
- `create(zone)`: Create a new shipping zone
- `update(zoneId, zone)`: Update a shipping zone
- `delete(zoneId)`: Delete a shipping zone
- `getRates(params)`: Get shipping rates for a location

### Tags API
- `list()`: List all tags
- `get(tagId)`: Get a specific tag
- `create(tag)`: Create a new tag
- `update(tagId, tag)`: Update a tag
- `delete(tagId)`: Delete a tag
- `listByEntity(entityType, entityId)`: List tags for a specific entity

### Taxes API
- `list()`: List all taxes
- `get(taxId)`: Get a specific tax
- `create(tax)`: Create a new tax
- `update(taxId, tax)`: Update a tax
- `delete(taxId)`: Delete a tax
- `calculate(params)`: Calculate taxes for a location and amount

### Webhooks API
- `list()`: List all webhooks
- `get(webhookId)`: Get a specific webhook
- `create(webhook)`: Create a new webhook
- `update(webhookId, webhook)`: Update a webhook
- `delete(webhookId)`: Delete a webhook
- `test(webhookId, event)`: Test a webhook

### Vendors API
- `list()`: List all vendors
- `get(vendorId)`: Get a specific vendor
- `create(vendor)`: Create a new vendor
- `update(vendorId, vendor)`: Update a vendor
- `delete(vendorId)`: Delete a vendor

## Error Handling

The API wrapper includes built-in error handling that will throw errors with detailed information about API failures. Errors will include the HTTP status code and the error message from the Commerce7 API.

## TypeScript Support

This wrapper includes full TypeScript support with interfaces for all API responses and request parameters.

## Documentation

For more details about the Commerce7 API, please refer to the [official documentation](https://developer.commerce7.com/docs/commerce7-developer-docs).