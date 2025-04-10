
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

// Mock user data - in a real app this would come from a backend
const MOCK_USERS = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { email: 'ceo@example.com', password: 'ceo123', role: 'executive' },
  { email: 'manager@example.com', password: 'manager123', role: 'manager' },
  { email: 'employee@example.com', password: 'employee123', role: 'employee' }
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const user = MOCK_USERS.find(
        user => user.email === email && user.password === password
      );
      
      if (user) {
        // Store user info in localStorage - in a real app use a more secure method
        localStorage.setItem('currentUser', JSON.stringify({ 
          email: user.email, 
          role: user.role,
          isAuthenticated: true 
        }));
        
        toast({
          title: "Login successful",
          description: "Welcome to Team Flow Compass",
        });
        
        navigate('/erp-connect');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="user@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full mt-6" 
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-center text-gray-500 mt-2">
            Demo Accounts:<br />
            admin@example.com / admin123<br />
            ceo@example.com / ceo123<br />
            manager@example.com / manager123<br />
            employee@example.com / employee123
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
