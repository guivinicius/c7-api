import { createHTTPAdapter } from "./adapters/index.js";

export class BaseClient {
  constructor(config = {}) {
    const defaultHost = "https://api.commerce7.com";

    const clientId = config.clientId || process.env.COMMERCE7_CLIENT_ID || "";
    const clientSecret =
      config.clientSecret || process.env.COMMERCE7_CLIENT_SECRET || "";

    this.tenantId = config.tenantId || process.env.COMMERCE7_TENANT_ID || "";
    this.apiVersion =
      config.apiVersion || process.env.COMMERCE7_API_VERSION || "v1";
    this.debug = config.debug || false;
    this.baseURL = `${
      config.host || process.env.COMMERCE7_HOST || defaultHost
    }/${this.apiVersion}`;

    if (!this.tenantId) {
      throw new Error(
        "Tenant ID is required. Provide it via config or COMMERCE7_TENANT_ID environment variable."
      );
    }
    if (!clientId) {
      throw new Error(
        "Client ID is required. Provide it via config or COMMERCE7_CLIENT_ID environment variable."
      );
    }
    if (!clientSecret) {
      throw new Error(
        "Client Secret is required. Provide it via config or COMMERCE7_CLIENT_SECRET environment variable."
      );
    }

    const httpConfig = {
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
        tenant: this.tenantId,
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
      debug: this.debug,
    };

    this.client = createHTTPAdapter(httpConfig);
  }

  // Base request methods
  async getRequest(endpoint, params) {
    const response = await this.client.request({
      method: "GET",
      endpoint,
      params,
    });
    return response.data;
  }

  async postRequest(endpoint, data) {
    const response = await this.client.request({
      method: "POST",
      endpoint,
      data,
    });
    return response.data;
  }

  async putRequest(endpoint, data) {
    const response = await this.client.request({
      method: "PUT",
      endpoint,
      data,
    });
    return response.data;
  }

  async deleteRequest(endpoint) {
    await this.client.request({
      method: "DELETE",
      endpoint,
    });
  }
}

export const Commerce7Client = BaseClient;
