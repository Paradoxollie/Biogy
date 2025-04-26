import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      {/* Future location for a consistent Header/Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add other routes here later */}
      </Routes>
      {/* Future location for a consistent Footer */}
    </div>
  );
}

export default App;