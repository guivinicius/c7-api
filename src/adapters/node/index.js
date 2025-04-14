import * as http from "http";
import * as https from "https";
import { BaseClient } from "../../client.js";

class NodeAdapter {
  constructor(config) {
    // Process environment variables for Node.js environment
    config = {
      ...config,
      tenantId: config.tenantId || process.env.COMMERCE7_TENANT_ID,
      clientId: config.clientId || process.env.COMMERCE7_CLIENT_ID,
      clientSecret: config.clientSecret || process.env.COMMERCE7_CLIENT_SECRET,
      host: config.host || process.env.COMMERCE7_HOST,
      apiVersion: config.apiVersion || process.env.COMMERCE7_API_VERSION,
    };

    this.config = config;
  }

  logDebug(message, data) {
    if (this.config.debug) {
      console.log("\x1b[36m%s\x1b[0m", "[Commerce7 Debug]:", message);
      if (data) {
        console.dir(data, { depth: null, colors: true });
      }
    }
  }

  async request(options) {
    const url = this.buildURL(options.endpoint, options.params);
    const urlObj = new URL(url);

    const requestOptions = {
      method: options.method,
      headers: {
        ...this.config.headers,
        "Content-Type": "application/json",
      },
    };

    if (this.config.auth) {
      const authString = Buffer.from(
        `${this.config.auth.username}:${this.config.auth.password}`
      ).toString("base64");
      requestOptions.headers["Authorization"] = `Basic ${authString}`;
    }

    this.logDebug("Request:", {
      url,
      method: options.method,
      headers: requestOptions.headers,
      params: options.params,
      data: options.data,
    });

    return new Promise((resolve, reject) => {
      const req = (urlObj.protocol === "https:" ? https : http).request(
        url,
        requestOptions,
        (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            const response = {
              data: data ? JSON.parse(data) : undefined,
              status: res.statusCode || 500,
              headers: res.headers,
            };

            this.logDebug("Response:", {
              status: response.status,
              headers: response.headers,
              data: response.data,
            });

            if (response.status >= 200 && response.status < 300) {
              resolve(response);
            } else {
              const error = new Error(`HTTP Error: ${response.status}`, {
                cause: response.data,
              });
              this.logDebug("Error:", error);
              reject(error);
            }
          });
        }
      );

      req.on("error", (error) => {
        this.logDebug("Network Error:", error);
        reject(error);
      });

      if (options.data) {
        req.write(JSON.stringify(options.data));
      }

      req.end();
    });
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
BaseClient.registerAdapter(NodeAdapter);
