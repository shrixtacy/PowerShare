import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MarketPage from './pages/MarketPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CommunityPage from './pages/CommunityPage';
import WalletPage from './pages/WalletPage';
import Registration from './components/Registration';
import LoginForm from './components/LoginForm';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleGetStarted = () => {
    setShowRegistration(true);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900`}>
          <Navbar 
            isDarkMode={isDarkMode} 
            onThemeToggle={toggleTheme}
            onLogin={() => setShowLogin(true)}
          />
          <Routes>
            <Route path="/" element={<HomePage onGetStarted={handleGetStarted} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/wallet" element={<WalletPage />} />
          </Routes>
          {showRegistration && (
            <Registration onClose={() => setShowRegistration(false)} />
          )}
          {showLogin && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
                  Login to PowerShare
                </h2>
                <LoginForm onClose={() => setShowLogin(false)} />
              </div>
            </div>
          )}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;