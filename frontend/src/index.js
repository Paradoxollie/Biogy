import React from 'react'
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App'
import { AuthProvider } from './context/AuthContext';
import './index.css'; // Import Tailwind CSS
import ErrorBoundary from './ErrorBoundary';

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