import React from 'react'
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App'
import { AuthProvider } from './context/AuthContext';
import './index.css'; // Import Tailwind CSS
import ErrorBoundary from './ErrorBoundary';

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Unhandled error:', event.error);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <HashRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </HashRouter>
        </ErrorBoundary>
    </React.StrictMode>
);