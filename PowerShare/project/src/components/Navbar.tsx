import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Battery, Wallet, Users, LineChart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onLogin: () => void;
}

export default function Navbar({ isDarkMode, onThemeToggle, onLogin }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">PowerShare</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/market" icon={<Battery className="h-5 w-5" />} text="Energy Market" isActive={isActive('/market')} />
            <NavLink to="/analytics" icon={<LineChart className="h-5 w-5" />} text="Analytics" isActive={isActive('/analytics')} />
            <NavLink to="/community" icon={<Users className="h-5 w-5" />} text="Community" isActive={isActive('/community')} />
            <NavLink to="/wallet" icon={<Wallet className="h-5 w-5" />} text="Wallet" isActive={isActive('/wallet')} />
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
            <MobileNavLink to="/market" icon={<Battery className="h-5 w-5" />} text="Energy Market" isActive={isActive('/market')} />
            <MobileNavLink to="/analytics" icon={<LineChart className="h-5 w-5" />} text="Analytics" isActive={isActive('/analytics')} />
            <MobileNavLink to="/community" icon={<Users className="h-5 w-5" />} text="Community" isActive={isActive('/community')} />
            <MobileNavLink to="/wallet" icon={<Wallet className="h-5 w-5" />} text="Wallet" isActive={isActive('/wallet')} />
            {user ? (
              <>
                <div className="px-3 py-2 text-gray-700 dark:text-gray-300">{user.name}</div>
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onLogin}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`flex items-center transition-colors ${
      isActive 
        ? 'text-green-500' 
        : 'text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500'
    }`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`flex items-center p-2 transition-colors ${
      isActive 
        ? 'text-green-500' 
        : 'text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500'
    }`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);