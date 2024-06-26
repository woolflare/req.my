# HTTP Request Inspector API

This API provides detailed information about incoming HTTP requests, including headers, IP information, and more.

## Endpoint

`GET https://req.my`

## Response Format

The API returns a JSON object with the following structure:

```json
{
  "method": "string",
  "url": "string",
  "pathname": "string",
  "searchParams": {},
  "headers": {},
  "body": "string",
  "ipInfo": {
    "ip": "string",
    "country": "string",
    "region": "string",
    "city": "string",
    "asn": "number",
    "isp": "string"
  }
}
```
## Field Descriptions

### `method`
- **Description**: The HTTP method of the request (e.g., GET, POST).

### `url`
- **Description**: The full URL of the request.

### `pathname`
- **Description**: The path portion of the URL.

### `searchParams`
- **Description**: An object containing any query parameters.

### `headers`
- **Description**: An object containing all request headers.

### `body`
- **Description**: The request body (if any).

### `ipInfo`
- **Description**: Information about the client's IP address:
  - **`ip`**: The client's IP address.
  - **`country`**: The country associated with the IP.
  - **`region`**: The region associated with the IP.
  - **`city`**: The city associated with the IP.
  - **`asn`**: The Autonomous System Number associated with the IP.
  - **`isp`**: The Internet Service Provider associated with the IP.

## Example Usage

### cURL

```bash
curl req.my
```

### JavaScript (Fetch API)

```javascript
fetch('https://req.my')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Notes
- The API includes all headers from the original request, including any Cloudflare-specific headers.
- IP information is derived from Cloudflare’s data and may not always be 100% accurate.
- The request body is included if present. For large bodies, you may want to implement size limits.
