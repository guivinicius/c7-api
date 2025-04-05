// Mock environment variables
process.env.COMMERCE7_TENANT_ID = 'test-tenant';
process.env.COMMERCE7_CLIENT_ID = 'test-client';
process.env.COMMERCE7_CLIENT_SECRET = 'test-secret';

// Global test timeout
jest.setTimeout(10000);