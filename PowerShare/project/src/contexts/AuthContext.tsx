import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_URL, apiRequest } from '../config/api';

interface User {
  id: string;
  name: string;
  email: string;
  address?: string;
  energyType?: string;
  capacity?: number;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  address?: string;
  energyType?: string;
  capacity?: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'powershare_auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStoredAuth = async () => {
      try {
        const storedAuth = localStorage.getItem(STORAGE_KEY);
        if (storedAuth) {
          const { user: storedUser, token: storedToken } = JSON.parse(storedAuth);
          setUser(storedUser);
          setToken(storedToken);
          await fetchUserProfile(storedToken);
        }
      } catch (err) {
        console.error('Error loading stored auth:', err);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredAuth();
  }, []);

  const saveAuthData = (userData: User, authToken: string) => {
    try {
      const authData = { user: userData, token: authToken };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    } catch (err) {
      console.error('Error saving auth data:', err);
    }
  };

  const fetchUserProfile = async (authToken: string) => {
    try {
      const userData = await apiRequest('/user/profile', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      
      setUser(userData);
      saveAuthData(userData, authToken);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      logout();
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    setError(null);
    setIsLoading(true);
    
    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      setUser(data.user);
      setToken(data.token);
      saveAuthData(data.user, data.token);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setError(null);
    setIsLoading(true);
    
    try {
      const data = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      setUser(data.user);
      setToken(data.token);
      saveAuthData(data.user, data.token);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEY);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}