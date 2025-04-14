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

The appropriate HTTP client must be imported based on your runtime environment.

## Usage

### Node.js

```javascript
// Import the Node.js adapter first
import '@c7-api/adapters/node';
import { Commerce7 } from 'c7-api';

const client = new Commerce7({
  tenantId: 'your-tenant-id',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  debug: true, // Optional, enables debug logging
  apiVersion: 'v1' // Optional, defaults to v1
});
```

### Browser

```javascript
// Import the Web API adapter first
import '@c7-api/adapters/web-api';
import { Commerce7 } from 'c7-api';

const client = new Commerce7({
  tenantId: 'your-tenant-id',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  debug: true, // Optional, enables debug logging
  apiVersion: 'v1' // Optional, defaults to v1
});
```

### Using Environment Variables

In Node.js environments, you can use environment variables:

```bash
COMMERCE7_TENANT_ID=your-tenant-id
COMMERCE7_CLIENT_ID=your-client-id
COMMERCE7_CLIENT_SECRET=your-client-secret
```

Then initialize without passing config:

```javascript
import '@c7-api/adapters/node';
import { Commerce7 } from 'c7-api';

const client = new Commerce7();
```

### Debug Mode

Enable debug mode to see detailed logs of requests and responses:

```javascript
const client = new Commerce7({
  // ...other config
  debug: true
});
```

## API Documentation

For more details about the Commerce7 API, please refer to the [official documentation](https://developer.commerce7.com/docs/commerce7-developer-docs).

## Error Handling

The API wrapper includes built-in error handling that will throw errors with detailed information about API failures. Errors will include the HTTP status code and the error message from the Commerce7 API.

## Release Instructions

To release a new version of the package:

1. Update version in `package.json`:
```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

2. Push changes and tags:
```bash
git push origin main --tags
```

3. Publish to npm:
```bash
npm publish --access public
```