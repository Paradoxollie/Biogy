import React from 'react'
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
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

// Create Redux store
const store = configureStore({
  reducer: {
    // Add your reducers here when needed
    user: (state = {}, action) => {
      switch (action.type) {
        case 'USER_LOGOUT':
          return {};
        default:
          return state;
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <HashRouter>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </HashRouter>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);