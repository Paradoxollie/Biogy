import React, { useEffect, useState } from 'react';
import { BROWSER_API_URL } from '../config';

function SystemStatusBanner() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const checkStatus = async () => {
      try {
        const response = await fetch(`${BROWSER_API_URL}/health`);
        const data = await response.json();

        if (!isMounted) {
          return;
        }

        if (!response.ok) {
          setMessage('Le backend est temporairement indisponible.');
          return;
        }

        if (data.database !== 'connected') {
          setMessage('Le site reste accessible, mais les comptes, le forum et les projets sont temporairement indisponibles.');
          return;
        }

        setMessage('');
      } catch (error) {
        if (isMounted) {
          setMessage('Le backend est temporairement indisponible.');
        }
      }
    };

    checkStatus();
    const intervalId = window.setInterval(checkStatus, 60000);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <div className="bg-amber-100 border-b border-amber-300 text-amber-900">
      <div className="container mx-auto px-4 py-3 text-sm font-medium">
        {message}
      </div>
    </div>
  );
}

export default SystemStatusBanner;
