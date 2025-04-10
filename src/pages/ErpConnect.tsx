
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const ErpConnect = () => {
  const [selectedErp, setSelectedErp] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [serverUrl, setServerUrl] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is logged in
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!user.isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simulate API connection
    setTimeout(() => {
      // Store connection info
      localStorage.setItem('erpConnection', JSON.stringify({
        type: selectedErp,
        connected: true,
        dataLoaded: true
      }));
      
      toast({
        title: "Connection successful",
        description: `Connected to ${selectedErp}. Data synchronization complete.`,
      });
      
      setIsConnecting(false);
      navigate('/');
    }, 2000);
  };

  const renderConnectionForm = () => (
    <form onSubmit={handleConnect} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="serverUrl">Server URL</Label>
        <Input
          id="serverUrl"
          placeholder={`${selectedErp} API URL`}
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="apiKey">API Key</Label>
        <Input
          id="apiKey"
          type="password"
          placeholder="Your API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full mt-4"
        disabled={isConnecting}
      >
        {isConnecting ? "Connecting..." : "Connect & Sync Data"}
      </Button>
    </form>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Connect to ERP System</CardTitle>
          <CardDescription>
            Link your ERP system to enable organization hierarchy, employee data, and project management features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="select" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="select">Select ERP</TabsTrigger>
              <TabsTrigger value="connect" disabled={!selectedErp}>Connect</TabsTrigger>
            </TabsList>
            
            <TabsContent value="select" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="erp-select">ERP System</Label>
                <Select onValueChange={setSelectedErp}>
                  <SelectTrigger id="erp-select">
                    <SelectValue placeholder="Select an ERP System" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workday">Workday</SelectItem>
                    <SelectItem value="peoplesoft">PeopleSoft</SelectItem>
                    <SelectItem value="sap">SAP</SelectItem>
                    <SelectItem value="oracle">Oracle HCM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {selectedErp && (
                <Button 
                  className="w-full mt-4" 
                  onClick={() => document.querySelector('[data-value="connect"]')?.click()}
                >
                  Continue
                </Button>
              )}
              
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    localStorage.setItem('erpConnection', JSON.stringify({
                      type: 'demo',
                      connected: true,
                      dataLoaded: true
                    }));
                    toast({
                      title: "Demo Mode Activated",
                      description: "Using sample data for demonstration purposes."
                    });
                    navigate('/');
                  }}
                >
                  Skip & Use Demo Data
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="connect">
              <h3 className="text-lg font-medium mb-4">Connect to {selectedErp}</h3>
              {renderConnectionForm()}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErpConnect;
