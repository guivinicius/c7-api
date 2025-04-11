import { NodeHTTPAdapter } from "./node.js";
import { BrowserHTTPAdapter } from "./browser.js";

export const createHTTPAdapter = (config) => {
  if (typeof window === "undefined") {
    return new NodeHTTPAdapter(config);
  }
  return new BrowserHTTPAdapter(config);
};
