
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { hasPermission, PERMISSIONS } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [erpSettings, setErpSettings] = useState({
    apiKey: '************',
    refreshRate: '60',
    enabledModules: ['hr', 'projects', 'departments']
  });
  
  // Check admin permission
  React.useEffect(() => {
    if (!hasPermission(PERMISSIONS.ACCESS_ADMIN_PANEL)) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You don't have permission to access the admin panel."
      });
      navigate('/');
    }
  }, [navigate, toast]);

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your ERP connection settings have been updated."
    });
  };

  const handleResetDemoData = () => {
    toast({
      title: "Demo Data Reset",
      description: "All demo data has been reset to its initial state."
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </div>
      
      <Tabs defaultValue="erp" className="w-full">
        <TabsList>
          <TabsTrigger value="erp">ERP Connection</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="system">System Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="erp">
          <Card>
            <CardHeader>
              <CardTitle>ERP Connection Settings</CardTitle>
              <CardDescription>Configure your ERP integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input 
                  id="apiKey" 
                  value={erpSettings.apiKey} 
                  onChange={(e) => setErpSettings({...erpSettings, apiKey: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="refreshRate">Data Refresh Rate (minutes)</Label>
                <Input 
                  id="refreshRate" 
                  type="number" 
                  value={erpSettings.refreshRate} 
                  onChange={(e) => setErpSettings({...erpSettings, refreshRate: e.target.value})}
                />
              </div>
              
              <Button onClick={handleSaveSettings} className="mt-4">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-6">User management functionality would be implemented here.</p>
              
              <div className="flex justify-center">
                <Button variant="outline" onClick={handleResetDemoData}>Reset Demo Users</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure global system settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-6">System configuration options would be implemented here.</p>
              
              <div className="flex justify-center">
                <Button variant="outline" onClick={handleResetDemoData}>Reset Demo Data</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
