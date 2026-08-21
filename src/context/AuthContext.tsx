import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { AuthUser } from '../features/Auth/types/auth.types';

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AUTH_STORAGE_KEY = 'employee-management:auth-user';

const DEMO_CREDENTIALS = {
  email: 'admin@peopleflow.com',
  password: '123456',
};

const DEMO_USER: AuthUser = {
  id: '1',
  name: 'Admin User',
  email: 'admin@peopleflow.com',
  role: 'Administrator',
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getStoredUser(): AuthUser | null {
  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser) as AuthUser;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);

    return null;
  }
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredUser());

  const login = (email: string, password: string): boolean => {
    const isValidUser =
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password;

    if (!isValidUser) {
      return false;
    }

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(DEMO_USER));

    setUser(DEMO_USER);

    return true;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);

    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
