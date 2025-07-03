import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'user' | 'admin' | 'restaurant' | 'courier';
  avatar?: string;
  addresses?: Address[];
  preferences?: UserPreferences;
}

interface Address {
  id: string;
  title: string;
  address: string;
  apartment?: string;
  entrance?: string;
  floor?: string;
  comment?: string;
  isDefault: boolean;
}

interface UserPreferences {
  notifications: boolean;
  marketing: boolean;
  theme: 'light' | 'dark';
  language: 'ru' | 'en';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  addAddress: (address: Omit<Address, 'id'>) => Promise<void>;
  updateAddress: (id: string, address: Partial<Address>) => Promise<void>;
  deleteAddress: (id: string) => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненную сессию при загрузке
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Проверяем админские учетные данные
      if (email === 'admin@vkusdelivery.ru' && password === 'admin123') {
        const adminUser: User = {
          id: 'admin-1',
          email: 'admin@vkusdelivery.ru',
          name: 'Администратор',
          phone: '+7 (999) 123-45-67',
          role: 'admin',
          avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100'
        };
        setUser(adminUser);
        localStorage.setItem('user', JSON.stringify(adminUser));
        return;
      }

      // Обычный пользователь
      const userData: User = {
        id: 'user-1',
        email,
        name: 'Иван Петров',
        phone: '+7 (999) 123-45-67',
        role: 'user',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        addresses: [
          {
            id: 'addr-1',
            title: 'Дом',
            address: 'г. Москва, ул. Примерная, 123',
            apartment: '45',
            entrance: '2',
            floor: '5',
            isDefault: true
          }
        ],
        preferences: {
          notifications: true,
          marketing: false,
          theme: 'light',
          language: 'ru'
        }
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      throw new Error('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData: User = {
        id: `user-${Date.now()}`,
        email: data.email,
        name: data.name,
        phone: data.phone,
        role: 'user',
        addresses: [],
        preferences: {
          notifications: true,
          marketing: false,
          theme: 'light',
          language: 'ru'
        }
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      throw new Error('Ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const addAddress = async (address: Omit<Address, 'id'>) => {
    if (!user) return;
    
    const newAddress: Address = {
      ...address,
      id: `addr-${Date.now()}`
    };

    const updatedUser = {
      ...user,
      addresses: [...(user.addresses || []), newAddress]
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const updateAddress = async (id: string, addressData: Partial<Address>) => {
    if (!user || !user.addresses) return;
    
    const updatedAddresses = user.addresses.map(addr =>
      addr.id === id ? { ...addr, ...addressData } : addr
    );

    const updatedUser = {
      ...user,
      addresses: updatedAddresses
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const deleteAddress = async (id: string) => {
    if (!user || !user.addresses) return;
    
    const updatedAddresses = user.addresses.filter(addr => addr.id !== id);
    const updatedUser = {
      ...user,
      addresses: updatedAddresses
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};