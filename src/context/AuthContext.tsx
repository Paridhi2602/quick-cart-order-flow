
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => Promise<string>;
  verifyOtp: (email: string, otp: string) => Promise<boolean>;
  signup: (name: string, email: string) => Promise<string>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  // Mock login function that would normally call an API
  const login = async (email: string): Promise<string> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just return a mock OTP
      // In a real app, this would be sent to the user's email or phone
      const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(`Mock OTP for ${email}: ${mockOtp}`);
      
      toast.success("OTP sent to your email");
      return mockOtp;
    } catch (error) {
      toast.error("Failed to send OTP");
      throw new Error("Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  // OTP verification - accepts any valid OTP format
  const verifyOtp = async (email: string, otp: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Accept any valid OTP (has proper format of 6 digits)
      if (otp.length === 6 && /^\d+$/.test(otp)) {
        setUser({
          id: '1',
          name: email.split('@')[0],
          email,
        });
        toast.success("Login successful");
        return true;
      }
      
      toast.error("Invalid OTP format. Please enter 6 digits.");
      return false;
    } catch (error) {
      toast.error("Failed to verify OTP");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock signup function
  const signup = async (name: string, email: string): Promise<string> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, return a mock OTP
      const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(`Mock OTP for signup ${email}: ${mockOtp}`);
      
      toast.success("Account created. OTP sent to your email");
      return mockOtp;
    } catch (error) {
      toast.error("Failed to create account");
      throw new Error("Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    toast.success("Logged out successfully");
  };

  const value = {
    user,
    isAuthenticated,
    login,
    verifyOtp,
    signup,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
