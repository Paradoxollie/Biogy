# API Error Handling

## Introduction

This document outlines the standard error handling practices for our API. We strive to provide clear and consistent error messages to aid developers in understanding and resolving issues.

## Error Format

Errors are returned in a JSON format with the following structure:
```
json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "A human-readable error message."
  }
}
```
## Common Error Codes

| Code             | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `INVALID_INPUT`  | The request contains invalid or malformed input.                |
| `NOT_FOUND`      | The requested resource was not found.                          |
| `UNAUTHORIZED`   | The request lacks valid authentication credentials.            |
| `FORBIDDEN`      | The authenticated user does not have permission to access. |
| `SERVER_ERROR`   | An unexpected error occurred on the server. |
| `RATE_LIMITED`    | The client has exceeded the allowed rate limit.               |
| `CONFLICT`       | The request could not be processed because of a conflict.     |

## Best Practices

*   **Error Handling:** Always handle potential errors in your application.
*   **Logging:** Log errors on the server-side for debugging purposes.
*   **User Feedback:** Provide helpful error messages to end-users when necessary.
*   **Retry Logic:** For transient errors, implement retry logic with exponential backoff.

## Example

Example of an `INVALID_INPUT` error: