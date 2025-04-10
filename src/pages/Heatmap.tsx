
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Filter, InfoIcon, RefreshCw } from 'lucide-react';
import { collaborationData } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Heatmap = () => {
  const [period, setPeriod] = useState('week');
  const [viewBy, setViewBy] = useState('team');
  
  // Extract unique entities for the heatmap
  const entities = Array.from(
    new Set([
      ...collaborationData.map(item => item.from),
      ...collaborationData.map(item => item.to)
    ])
  ).sort();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Collaboration Heatmap</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Team Collaboration Analysis</CardTitle>
          <CardDescription>
            Visualize collaboration patterns between teams and individuals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <Tabs defaultValue="heatmap" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="metrics">Metrics</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex flex-wrap items-center gap-2">
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="quarter">Quarter</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={viewBy} onValueChange={setViewBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="View by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="person">By Person</SelectItem>
                  <SelectItem value="team">By Team</SelectItem>
                  <SelectItem value="department">By Department</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Heatmap Visualization */}
          <div className="border rounded-md p-4 min-h-[600px]">
            <TabsContent value="heatmap" className="mt-0">
              <div className="overflow-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="p-2 text-left font-medium"></th>
                      {entities.map(entity => (
                        <th key={entity} className="p-2 text-sm font-medium rotate-45 h-16 align-bottom">
                          <div className="origin-bottom-left ml-2">{entity}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {entities.map(fromEntity => (
                      <tr key={fromEntity}>
                        <td className="p-2 font-medium border-r">{fromEntity}</td>
                        {entities.map(toEntity => {
                          const collaboration = collaborationData.find(
                            item => item.from === fromEntity && item.to === toEntity
                          );
                          const value = collaboration ? collaboration.value : 0;
                          let bgColor = 'bg-gray-50';
                          if (value > 0 && value <= 0.3) bgColor = 'bg-blue-100';
                          else if (value > 0.3 && value <= 0.6) bgColor = 'bg-blue-300';
                          else if (value > 0.6) bgColor = 'bg-blue-500';
                          
                          return (
                            <td 
                              key={`${fromEntity}-${toEntity}`} 
                              className={`p-2 text-center ${bgColor} hover:opacity-80 cursor-default transition-opacity`}
                              title={`${fromEntity} → ${toEntity}: ${value ? (value * 100).toFixed(0) + '%' : 'No collaboration'}`}
                            >
                              {value ? (value * 100).toFixed(0) + '%' : ''}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="network" className="mt-0">
              <div className="flex items-center justify-center h-[500px]">
                <p className="text-muted-foreground">Network visualization to be implemented</p>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics" className="mt-0">
              <div className="flex items-center justify-center h-[500px]">
                <p className="text-muted-foreground">Collaboration metrics to be implemented</p>
              </div>
            </TabsContent>
          </div>
          
          <div className="flex items-center mt-4 text-xs text-muted-foreground">
            <InfoIcon className="h-3 w-3 mr-1" />
            <span>
              Color intensity indicates collaboration frequency, with darker colors representing stronger collaboration.
            </span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Collaboration Insights</CardTitle>
          <CardDescription>Key findings from collaboration patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Strongest Collaborations</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center text-sm">
                  <span>CTO → Dev Manager</span>
                  <span className="font-medium">90%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span>Dev Manager → Senior Dev</span>
                  <span className="font-medium">90%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span>CEO → CTO</span>
                  <span className="font-medium">80%</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Weakest Collaborations</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center text-sm">
                  <span>Marketing Manager → IT Manager</span>
                  <span className="font-medium">20%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span>CTO → CMO</span>
                  <span className="font-medium">10%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span>Finance Manager → IT Manager</span>
                  <span className="font-medium">10%</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Recommended Improvements</h3>
              <ul className="space-y-2 text-sm">
                <li>Increase collaboration between Marketing and IT teams</li>
                <li>Foster better communication between CTO and CMO</li>
                <li>Create cross-functional project teams to improve department integration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Heatmap;
