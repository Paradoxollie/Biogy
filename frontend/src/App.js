// frontend/src/App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Biogy</h1>
    </div>
  );
}

export default App;

// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);