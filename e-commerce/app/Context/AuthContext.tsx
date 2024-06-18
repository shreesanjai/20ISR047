"use client"
import { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextProps {
  token: string | null;
  fetchToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  fetchToken: async () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
      });
      const data = await response.json();
      console.log(data);
      
      if (data.token) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
      } else {
        console.error('Failed to fetch token:', data.error);
      }
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      fetchToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, fetchToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
