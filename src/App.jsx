import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div className="flex h-screen items-center justify-center text-2xl">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;