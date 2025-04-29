const axios = require('axios');

// The API URL to proxy to
const API_URL = 'https://biogy-api.onrender.com/api';

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Get the path from the event
    const path = event.path.replace('/.netlify/functions/proxy', '');
    
    // Get the query string
    const queryString = event.queryStringParameters 
      ? '?' + Object.entries(event.queryStringParameters)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&')
      : '';
    
    // Construct the full URL
    const url = `${API_URL}${path}${queryString}`;
    
    console.log(`Proxying request to: ${url}`);
    
    // Get the request body
    let data = null;
    if (event.body) {
      try {
        data = JSON.parse(event.body);
      } catch (error) {
        console.error('Error parsing request body:', error);
      }
    }
    
    // Forward the request to the API
    const response = await axios({
      method: event.httpMethod,
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': event.headers.authorization || ''
      }
    });
    
    // Return the response
    return {
      statusCode: response.status || 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Proxy error:', error);
    
    // Return the error
    return {
      statusCode: error.response?.status || 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: error.message,
        details: error.response?.data || null
      })
    };
  }
};
