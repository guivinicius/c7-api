import dotenv from 'dotenv';
import { CustomersAPI } from './domains/customers';
import { ProductsAPI } from './domains/products';
import { OrdersAPI } from './domains/orders';
import { AppsAPI } from './domains/apps';
import { ClubsAPI } from './domains/clubs';
import { CollectionsAPI } from './domains/collections';
import { CouponsAPI } from './domains/coupons';
import { DepartmentsAPI } from './domains/departments';
import { GiftCardsAPI } from './domains/gift-cards';
import { InventoryAPI } from './domains/inventory';
import { NotesAPI } from './domains/notes';
import { PromotionsAPI } from './domains/promotions';
import { ReservationsAPI } from './domains/reservations';
import { ShippingAPI } from './domains/shipping';
import { TagsAPI } from './domains/tags';
import { TaxesAPI } from './domains/taxes';
import { WebhooksAPI } from './domains/webhooks';
import { VendorsAPI } from './domains/vendors';
import { createHTTPAdapter, HTTPAdapter, RequestConfig } from './adapters';

dotenv.config();

export interface Commerce7Config {
  tenantId?: string;
  clientId?: string;
  clientSecret?: string;
  baseURL?: string;
  apiVersion?: 'v1' | 'v2';
}

export abstract class Commerce7Client {
  protected client: HTTPAdapter;
  protected tenantId: string;
  protected apiVersion: string;

  constructor(config: Commerce7Config = {}) {
    this.tenantId = config.tenantId || process.env.COMMERCE7_TENANT_ID || '';
    const clientId = config.clientId || process.env.COMMERCE7_CLIENT_ID || '';
    const clientSecret = config.clientSecret || process.env.COMMERCE7_CLIENT_SECRET || '';
    this.apiVersion = config.apiVersion || process.env.COMMERCE7_API_VERSION || 'v1';
    
    if (!this.tenantId) {
      throw new Error('Tenant ID is required. Provide it via config or COMMERCE7_TENANT_ID environment variable.');
    }
    if (!clientId) {
      throw new Error('Client ID is required. Provide it via config or COMMERCE7_CLIENT_ID environment variable.');
    }
    if (!clientSecret) {
      throw new Error('Client Secret is required. Provide it via config or COMMERCE7_CLIENT_SECRET environment variable.');
    }

    const defaultBaseURL = `https://api.commerce7.com/${this.apiVersion}`;
    
    const httpConfig: RequestConfig = {
      baseURL: config.baseURL || process.env.COMMERCE7_BASE_URL || defaultBaseURL,
      headers: {
        'Content-Type': 'application/json',
        'tenant': this.tenantId
      },
      auth: {
        username: clientId,
        password: clientSecret
      }
    };

    this.client = createHTTPAdapter(httpConfig);
  }

  // Base request methods
  protected async getRequest<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const response = await this.client.request<T>({
      method: 'GET',
      endpoint,
      params
    });
    return response.data;
  }

  protected async postRequest<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.client.request<T>({
      method: 'POST',
      endpoint,
      data
    });
    return response.data;
  }

  protected async putRequest<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.client.request<T>({
      method: 'PUT',
      endpoint,
      data
    });
    return response.data;
  }

  protected async deleteRequest(endpoint: string): Promise<void> {
    await this.client.request({
      method: 'DELETE',
      endpoint
    });
  }
}

export class Commerce7 {
  public customers: CustomersAPI;
  public products: ProductsAPI;
  public orders: OrdersAPI;
  public apps: AppsAPI;
  public clubs: ClubsAPI;
  public collections: CollectionsAPI;
  public coupons: CouponsAPI;
  public departments: DepartmentsAPI;
  public giftCards: GiftCardsAPI;
  public inventory: InventoryAPI;
  public notes: NotesAPI;
  public promotions: PromotionsAPI;
  public reservations: ReservationsAPI;
  public shipping: ShippingAPI;
  public tags: TagsAPI;
  public taxes: TaxesAPI;
  public webhooks: WebhooksAPI;
  public vendors: VendorsAPI;

  constructor(config: Commerce7Config = {}) {
    this.customers = new CustomersAPI(config);
    this.products = new ProductsAPI(config);
    this.orders = new OrdersAPI(config);
    this.apps = new AppsAPI(config);
    this.clubs = new ClubsAPI(config);
    this.collections = new CollectionsAPI(config);
    this.coupons = new CouponsAPI(config);
    this.departments = new DepartmentsAPI(config);
    this.giftCards = new GiftCardsAPI(config);
    this.inventory = new InventoryAPI(config);
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