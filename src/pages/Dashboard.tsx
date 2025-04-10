
import React from 'react';
import { 
  BarChart, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  PieChart, 
  Users 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardStats, projectsData, activityFeed } from '@/data/mockData';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#3498DB', '#1ABC9C', '#F39C12', '#9B59B6'];

const Dashboard = () => {
  // Department distribution data
  const departmentData = [
    { name: 'Development', value: 8 },
    { name: 'Marketing', value: 5 },
    { name: 'Finance', value: 4 },
    { name: 'IT', value: 7 }
  ];

  // Project status data
  const projectStatusData = [
    { name: 'Planning', value: 1 },
    { name: 'In Progress', value: 3 },
    { name: 'Review', value: 1 },
    { name: 'Completed', value: 0 }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <p className="text-3xl font-bold">{dashboardStats.activeProjects}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Projects</p>
                <p className="text-3xl font-bold">{dashboardStats.completedProjects}</p>
              </div>
              <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-3xl font-bold">{dashboardStats.totalEmployees}</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Deadlines</p>
                <p className="text-3xl font-bold">{dashboardStats.upcomingDeadlines}</p>
              </div>
              <div className="h-12 w-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Status Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Project Status Overview</CardTitle>
            <CardDescription>
              Distribution of projects by current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Department Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Department Distribution</CardTitle>
            <CardDescription>
              Number of employees in each department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart
                  data={departmentData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Employees" fill="#3498DB" />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>
              Your active project updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((project) => (
                <div key={project.id} className="flex items-center border-b last:border-b-0 border-border pb-4 last:pb-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{project.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{project.members.length} members</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <span 
                      className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                        project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : project.status === 'Review'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>
              Recent activity across your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityFeed.map((activity) => (
                <div key={activity.id} className="flex items-start pb-4 border-b last:border-b-0 border-border last:pb-0">
                  <div className="w-9 h-9 rounded-full bg-muted flex-shrink-0 flex items-center justify-center mr-3">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-muted-foreground">{activity.action}</span>{' '}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
