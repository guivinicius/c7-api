# c7-api

A JavaScript wrapper for the Commerce7 API that works in both Node.js and browser environments.

## Installation

```bash
npm install c7-api
```

## Environment Support

This package works in:
- Node.js (using built-in http/https modules)
- Browsers (using fetch API)
- React Native (using fetch API)

The appropriate HTTP client will be automatically selected based on the runtime environment.

## Usage

### Basic Usage

```javascript
import { Commerce7 } from 'c7-api';

const client = new Commerce7({
  tenantId: 'your-tenant-id',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  apiVersion: 'v2' // Optional, defaults to v1
});
```

### Using the Client Module Directly

If you need access to the underlying client:

```javascript
import { client } from 'c7-api/client';

// Configure the client
const c7Client = client.configure({
  tenantId: 'your-tenant-id',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
});
```

## Error Handling

The API wrapper includes built-in error handling that will throw errors with detailed information about API failures. Errors will include the HTTP status code and the error message from the Commerce7 API.

## Documentation

For more details about the Commerce7 API, please refer to the [official documentation](https://developer.commerce7.com/docs/commerce7-developer-docs).