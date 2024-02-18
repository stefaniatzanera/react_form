import './App.css';
import './ContactForm';
import MainPage from './MainPage';
import BonusFormEntryLocalStorage from './bonus-form-entry-local-storage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bonus-form-entry-local-storage" element={<BonusFormEntryLocalStorage />} />
      </Routes>
    </Router>
  );
}

export default App;
