
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Briefcase, 
  Building, 
  User, 
  DollarSign 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { employeesData, projectsData } from '@/data/mockData';

const COLORS = ['#3498DB', '#1ABC9C', '#F39C12', '#9B59B6'];

const Profile = () => {
  // Using first employee as the current profile
  const employee = employeesData[0];
  
  // Mock work hours data
  const workHoursData = [
    { day: 'Mon', hours: 8.5 },
    { day: 'Tue', hours: 9.2 },
    { day: 'Wed', hours: 7.8 },
    { day: 'Thu', hours: 8.7 },
    { day: 'Fri', hours: 7.8 },
  ];
  
  // Mock PTO data
  const ptoData = [
    { name: 'Used', value: 10 },
    { name: 'Remaining', value: employee.ptoBalance },
  ];
  
  // Mock compensation history
  const compensationData = [
    { year: '2020', salary: 210000 },
    { year: '2021', salary: 225000 },
    { year: '2022', salary: 235000 },
    { year: '2023', salary: 240000 },
    { year: '2024', salary: employee.salary },
  ];
  
  // Mock activities
  const activities = [
    { id: 1, action: 'Completed task', target: 'Q2 Budget Planning', time: '2 hours ago' },
    { id: 2, action: 'Added comment on', target: 'Website Redesign', time: 'Yesterday' },
    { id: 3, action: 'Started new project', target: 'Marketing Campaign', time: '3 days ago' },
    { id: 4, action: 'Approved request from', target: 'Emily Johnson', time: '1 week ago' },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Employee Profile</h1>
        <Button variant="outline">Edit Profile</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={employee.image} />
                  <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{employee.name}</h2>
                <p className="text-muted-foreground">{employee.position}</p>
                <Badge className="mt-2">{employee.department}</Badge>
                
                <div className="w-full mt-6 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{employee.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{employee.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{employee.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Hired: {new Date(employee.hireDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="w-full mt-6 pt-6 border-t border-border">
                  <h3 className="font-medium mb-2">Current Projects</h3>
                  <div className="space-y-2">
                    {employee.projects.map((projectName, index) => (
                      <div key={index} className="text-sm p-2 bg-muted rounded-md">
                        {projectName}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full mt-6 pt-6 border-t border-border">
                  <h3 className="font-medium mb-2">Reporting Manager</h3>
                  {employee.manager ? (
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{employee.manager.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="ml-2">{employee.manager}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No direct manager</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employee Dashboard</CardTitle>
              <CardDescription>Key metrics and information</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="worktime">
                <TabsList className="mb-4">
                  <TabsTrigger value="worktime">Work Time</TabsTrigger>
                  <TabsTrigger value="pto">PTO</TabsTrigger>
                  <TabsTrigger value="compensation">Compensation</TabsTrigger>
                </TabsList>
                
                <TabsContent value="worktime">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <Clock className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">{employee.workHours}h</p>
                      <p className="text-xs text-muted-foreground">This Week</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <Clock className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">38.5h</p>
                      <p className="text-xs text-muted-foreground">Last Week</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <Clock className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">168h</p>
                      <p className="text-xs text-muted-foreground">This Month</p>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={workHoursData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar name="Hours Worked" dataKey="hours" fill="#3498DB" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="pto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <Calendar className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">{employee.ptoBalance}</p>
                      <p className="text-xs text-muted-foreground">PTO Available</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <Calendar className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">10</p>
                      <p className="text-xs text-muted-foreground">PTO Used</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <Calendar className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">25</p>
                      <p className="text-xs text-muted-foreground">Total Annual</p>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ptoData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {ptoData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="compensation">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <DollarSign className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">${employee.salary.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Annual Salary</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <DollarSign className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">${Math.round(employee.salary / 12).toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Monthly</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-md">
                      <DollarSign className="h-5 w-5 mb-2 text-primary" />
                      <p className="text-xl font-bold">+4.2%</p>
                      <p className="text-xs text-muted-foreground">YoY Growth</p>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={compensationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => ['$' + value.toLocaleString(), 'Salary']} />
                        <Legend />
                        <Line type="monotone" dataKey="salary" stroke="#3498DB" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map(activity => (
                  <div key={activity.id} className="flex items-start pb-4 border-b last:border-b-0 border-border last:pb-0">
                    <div className="w-9 h-9 rounded-full bg-muted flex-shrink-0 flex items-center justify-center mr-3">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{employee.name}</span>{' '}
                        <span className="text-muted-foreground">{activity.action}</span>{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
