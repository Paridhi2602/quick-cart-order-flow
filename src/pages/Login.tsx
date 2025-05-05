
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';

interface LocationState {
  returnTo?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const returnTo = state?.returnTo || '/';
  
  const { login, signup, verifyOtp, isLoading } = useAuth();
  
  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginOtp, setLoginOtp] = useState('');
  const [loginOtpSent, setLoginOtpSent] = useState(false);
  const [storedOtp, setStoredOtp] = useState('');
  
  // Signup state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupOtp, setSignupOtp] = useState('');
  const [signupOtpSent, setSignupOtpSent] = useState(false);
  const [signupStoredOtp, setSignupStoredOtp] = useState('');
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginOtpSent) {
      try {
        const otp = await login(loginEmail);
        setStoredOtp(otp);
        setLoginOtpSent(true);
      } catch (error) {
        console.error('Login error:', error);
      }
    } else {
      const success = await verifyOtp(loginEmail, loginOtp);
      if (success) {
        navigate(returnTo);
      }
    }
  };
  
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupOtpSent) {
      try {
        const otp = await signup(signupName, signupEmail);
        setSignupStoredOtp(otp);
        setSignupOtpSent(true);
      } catch (error) {
        console.error('Signup error:', error);
      }
    } else {
      const success = await verifyOtp(signupEmail, signupOtp);
      if (success) {
        navigate(returnTo);
      }
    }
  };
  
  const renderOtpInput = (otp: string, setOtp: React.Dispatch<React.SetStateAction<string>>) => {
    return (
      <div className="otp-input-container">
        {[...Array(6)].map((_, index) => (
          <Input
            key={index}
            className="otp-input"
            value={otp[index] || ''}
            onChange={(e) => {
              const newOtp = otp.split('');
              newOtp[index] = e.target.value.slice(-1);
              setOtp(newOtp.join(''));
              
              // Auto-focus next input
              if (e.target.value && index < 5) {
                const nextInput = e.target.parentElement?.nextElementSibling?.querySelector('input');
                if (nextInput) {
                  nextInput.focus();
                }
              }
            }}
            onKeyDown={(e) => {
              // Handle backspace to go to previous input
              if (e.key === 'Backspace' && !otp[index] && index > 0) {
                const prevInput = e.currentTarget.parentElement?.previousElementSibling?.querySelector('input');
                if (prevInput) {
                  prevInput.focus();
                }
              }
            }}
            maxLength={1}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container py-12 max-w-md">
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                {!loginOtpSent 
                  ? "Enter your email to receive a one-time password." 
                  : "Enter the OTP sent to your email."}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLoginSubmit}>
              <CardContent className="space-y-4">
                {!loginOtpSent ? (
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="otp">One-Time Password</Label>
                    {renderOtpInput(loginOtp, setLoginOtp)}
                    <p className="text-xs text-muted-foreground text-center">
                      For demo purposes, OTP is: {storedOtp}
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : !loginOtpSent ? "Send OTP" : "Login"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                {!signupOtpSent 
                  ? "Enter your details to create a new account." 
                  : "Enter the OTP sent to your email."}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignupSubmit}>
              <CardContent className="space-y-4">
                {!signupOtpSent ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="signup-otp">One-Time Password</Label>
                    {renderOtpInput(signupOtp, setSignupOtp)}
                    <p className="text-xs text-muted-foreground text-center">
                      For demo purposes, OTP is: {signupStoredOtp}
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : !signupOtpSent ? "Create Account" : "Verify"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
