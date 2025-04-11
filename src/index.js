import { CustomersAPI } from "./domains/customers.js";
import { ProductsAPI } from "./domains/products.js";
import { OrdersAPI } from "./domains/orders.js";
import { ClubsAPI } from "./domains/clubs.js";
import { CollectionsAPI } from "./domains/collections.js";
import { CouponsAPI } from "./domains/coupons.js";
import { DepartmentsAPI } from "./domains/departments.js";
import { GiftCardsAPI } from "./domains/gift-cards.js";
import { InventoryAPI } from "./domains/inventory.js";
import { InventoryLocationAPI } from "./domains/inventory-location.js";
import { NotesAPI } from "./domains/notes.js";
import { PromotionsAPI } from "./domains/promotions.js";
import { ReservationsAPI } from "./domains/reservations.js";
import { ShippingAPI } from "./domains/shipping.js";
import { TagsAPI } from "./domains/tags.js";
import { TaxesAPI } from "./domains/taxes.js";
import { WebhooksAPI } from "./domains/webhooks.js";
import { VendorsAPI } from "./domains/vendors.js";

export class Commerce7 {
  constructor(config = {}) {
    this.customers = new CustomersAPI(config);
    this.products = new ProductsAPI(config);
    this.orders = new OrdersAPI(config);
    this.clubs = new ClubsAPI(config);
    this.collections = new CollectionsAPI(config);
    this.coupons = new CouponsAPI(config);
    this.departments = new DepartmentsAPI(config);
    this.giftCards = new GiftCardsAPI(config);
    this.inventory = new InventoryAPI(config);
    this.inventoryLocation = new InventoryLocationAPI(config);
    this.notes = new NotesAPI(config);
    this.promotions = new PromotionsAPI(config);
    this.reservations = new ReservationsAPI(config);
    this.shipping = new ShippingAPI(config);
    this.tags = new TagsAPI(config);
    this.taxes = new TaxesAPI(config);
    this.webhooks = new WebhooksAPI(config);
    this.vendors = new VendorsAPI(config);
  }
}
