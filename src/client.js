export class BaseClient {
  static adapter = null;

  static registerAdapter(adapter) {
    BaseClient.adapter = adapter;
  }

  constructor(config = {}) {
    if (!BaseClient.adapter) {
      throw new Error(
        "No adapter configured. Please import an adapter before creating a client.\nExample: import '@c7-api/adapters/node' or '@c7-api/adapters/web-api'"
      );
    }

    if (!config.tenantId) {
      throw new Error("Tenant ID is required");
    }
    if (!config.clientId) {
      throw new Error("Client ID is required");
    }
    if (!config.clientSecret) {
      throw new Error("Client Secret is required");
    }

    const defaultHost = "https://api.commerce7.com";
    this.tenantId = config.tenantId;
    this.apiVersion = config.apiVersion || "v1";
    this.debug = config.debug || false;
    this.baseURL = `${config.host || defaultHost}/${this.apiVersion}`;

    const httpConfig = {
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
        tenant: this.tenantId,
      },
      auth: {
        username: config.clientId,
        password: config.clientSecret,
      },
      debug: this.debug,
    };

    this.client = new BaseClient.adapter(httpConfig);
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
