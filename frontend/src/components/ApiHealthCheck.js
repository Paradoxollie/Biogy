import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';

function ApiHealthCheck() {
  const [status, setStatus] = useState('checking');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkApiHealth = async () => {
      try {
        const response = await fetch(`${API_URL}/api/health`);

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        setStatus('healthy');
        setMessage(data.message || 'API is working properly');
      } catch (error) {
        console.error('API Health Check Error:', error);
        setStatus('error');
        setError(error.message);
      }
    };

    checkApiHealth();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`p-3 rounded-lg shadow-lg ${
        status === 'checking' ? 'bg-yellow-50' :
        status === 'healthy' ? 'bg-green-50' :
        'bg-red-50'
      }`}>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${
            status === 'checking' ? 'bg-yellow-400 animate-pulse' :
            status === 'healthy' ? 'bg-green-500' :
            'bg-red-500'
          }`}></div>
          <div>
            <p className={`text-sm font-medium ${
              status === 'checking' ? 'text-yellow-700' :
              status === 'healthy' ? 'text-green-700' :
              'text-red-700'
            }`}>
              API Status: {status === 'checking' ? 'Checking...' : status === 'healthy' ? 'Connected' : 'Error'}
            </p>
            {status === 'healthy' && (
              <p className="text-xs text-green-600">{message}</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-600">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiHealthCheck;
