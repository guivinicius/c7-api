import { BaseClient } from "../../client.js";

class WebAPIAdapter {
  constructor(config) {
    this.config = config;
  }

  logDebug(message, data) {
    if (this.config.debug) {
      console.log("%c[Commerce7 Debug]:", "color: #36f", message);
      if (data) {
        console.dir(data, { depth: null });
      }
    }
  }

  async request(options) {
    const url = this.buildURL(options.endpoint, options.params);

    const headers = new Headers({
      ...this.config.headers,
      "Content-Type": "application/json",
    });

    if (this.config.auth) {
      const authString = btoa(
        `${this.config.auth.username}:${this.config.auth.password}`
      );
      headers.set("Authorization", `Basic ${authString}`);
    }

    const fetchOptions = {
      method: options.method,
      headers,
      body: options.data ? JSON.stringify(options.data) : undefined,
    };

    const headerObj = {};
    headers.forEach((value, key) => {
      headerObj[key] = value;
    });

    this.logDebug("Request:", {
      url,
      method: options.method,
      headers: headerObj,
      params: options.params,
      data: options.data,
    });

    try {
      const response = await fetch(url, fetchOptions);
      const responseHeaders = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        data = undefined;
      }

      const result = {
        data,
        status: response.status,
        headers: responseHeaders,
      };

      this.logDebug("Response:", {
        status: result.status,
        headers: result.headers,
        data: result.data,
      });

      if (!response.ok) {
        const error = new Error(
          `HTTP Error: ${result.status} - ${JSON.stringify(result.data)}`
        );
        this.logDebug("Error:", error);
        throw error;
      }

      return result;
    } catch (error) {
      this.logDebug("Network Error:", error);
      throw error;
    }
  }

  buildURL(endpoint, params) {
    const normalizedEndpoint = endpoint.startsWith("/")
      ? endpoint
      : `/${endpoint}`;
    const url = new URL(this.config.baseURL);
    url.pathname = url.pathname.replace(/\/$/, "") + normalizedEndpoint;

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }
}

// Register the adapter
BaseClient.registerAdapter(WebAPIAdapter);
