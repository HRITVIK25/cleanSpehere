import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TrashBotPage from './pages/TrashBotPage';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
            </>
          } />
          <Route path="/trashbot" element={<TrashBotPage />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;