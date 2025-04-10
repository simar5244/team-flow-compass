
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import OrgTree from '@/components/organization/OrgTree';
import { organizationData } from '@/data/mockData';

const Organization = () => {
  const [viewMode, setViewMode] = useState('tree');
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Organization Structure</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Maximize2 className="h-4 w-4 mr-2" />
            Full Screen
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Organizational Hierarchy</CardTitle>
          <CardDescription>View and navigate your organization's reporting structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <Tabs defaultValue="tree" className="w-[400px]" onValueChange={setViewMode}>
              <TabsList>
                <TabsTrigger value="tree">Tree View</TabsTrigger>
                <TabsTrigger value="graph">Graph View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Find employee..." 
                  className="pl-10 w-[250px]" 
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="overflow-auto border rounded-md p-4 min-h-[500px] max-h-[600px]">
            <TabsContent value="tree" className="mt-0">
              <OrgTree data={organizationData} />
            </TabsContent>
            
            <TabsContent value="graph" className="mt-0">
              <div className="flex items-center justify-center h-[500px]">
                <p className="text-muted-foreground">Graph view to be implemented</p>
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="mt-0">
              <div className="flex items-center justify-center h-[500px]">
                <p className="text-muted-foreground">List view to be implemented</p>
              </div>
            </TabsContent>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Organization Statistics</CardTitle>
          <CardDescription>Key metrics about your organizational structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border rounded-md p-4 text-center">
              <p className="text-4xl font-bold text-primary">24</p>
              <p className="text-sm text-muted-foreground mt-1">Total Employees</p>
            </div>
            <div className="border rounded-md p-4 text-center">
              <p className="text-4xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground mt-1">Departments</p>
            </div>
            <div className="border rounded-md p-4 text-center">
              <p className="text-4xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground mt-1">Management Levels</p>
            </div>
            <div className="border rounded-md p-4 text-center">
              <p className="text-4xl font-bold text-primary">5:1</p>
              <p className="text-sm text-muted-foreground mt-1">Avg. Span of Control</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Organization;
