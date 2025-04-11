import { Commerce7Client } from "../client.js";

export class CustomersAPI extends Commerce7Client {
  async list(params) {
    return this.getRequest("/customer", params);
  }

  async get(customerId) {
    return this.getRequest(`/customer/${customerId}`);
  }

  async create(customer, options = {}) {
    return this.postRequest("/customer", {
      ...customer,
      isSendTransactionEmail: options.isSendTransactionEmail,
    });
  }

  async createWithAddress(customer, options = {}) {
    return this.postRequest("/customer-address", {
      ...customer,
      isSendTransactionEmail: options.isSendTransactionEmail,
    });
  }

  async update(customerId, customer) {
    return this.putRequest(`/customer/${customerId}`, customer);
  }

  async delete(customerId) {
    return this.deleteRequest(`/customer/${customerId}`);
  }

  async listAddresses(customerId, params) {
    return this.getRequest(`/customer/${customerId}/address`);
  }

  async getAddress(customerId, addressId) {
    return this.getRequest(`/customer/${customerId}/address/${addressId}`);
  }

  async addAddress(customerId, address) {
    return this.postRequest(`/customer/${customerId}/address`, address);
  }

  async updateAddress(customerId, addressId, address) {
    return this.putRequest(
      `/customer/${customerId}/address/${addressId}`,
      address
    );
  }

  async deleteAddress(customerId, addressId) {
    return this.deleteRequest(`/customer/${customerId}/address/${addressId}`);
  }

  async listCreditCards(customerId) {
    return this.getRequest(`/customer/${customerId}/credit-card`);
  }

  async getCreditCard(customerId, cardId) {
    return this.getRequest(`/customer/${customerId}/credit-card/${cardId}`);
  }

  async addCreditCard(customerId, creditCard) {
    return this.postRequest(`/customer/${customerId}/credit-card`, creditCard);
  }

  async updateCreditCard(customerId, cardId, updates) {
    return this.putRequest(
      `/customer/${customerId}/credit-card/${cardId}`,
      updates
    );
  }

  async deleteCreditCard(customerId, cardId) {
    return this.deleteRequest(`/customer/${customerId}/credit-card/${cardId}`);
  }
}
