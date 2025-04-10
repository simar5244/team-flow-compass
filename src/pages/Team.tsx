
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Plus, 
  Mail, 
  Phone, 
  Building, 
  User, 
  ChevronRight 
} from 'lucide-react';
import { employeesData } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Team = () => {
  const [filter, setFilter] = useState('all');
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Team Directory</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Employee Directory</CardTitle>
              <CardDescription>
                View and manage team members
              </CardDescription>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search employees..." 
                  className="pl-10 w-[200px] md:w-[250px]" 
                />
              </div>
              
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employeesData.map(employee => (
              <Card key={employee.id} className="overflow-hidden">
                <div className="h-16 bg-gradient-to-r from-primary to-secondary"></div>
                <CardContent className="pt-0">
                  <div className="flex flex-col items-center -mt-8">
                    <Avatar className="h-16 w-16 border-4 border-background">
                      <AvatarImage src={employee.image} alt={employee.name} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-medium mt-2">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">{employee.position}</p>
                    <Badge className="mt-2">{employee.department}</Badge>
                    
                    <div className="w-full mt-4 border-t border-border pt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="truncate">{employee.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{employee.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{employee.location}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      View Profile <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;
