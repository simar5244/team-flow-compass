
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Plus, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  Calendar, 
  Users, 
  ChevronRight, 
  MoreHorizontal 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { projectsData, employeesData } from '@/data/mockData';

const Projects = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{projectsData.length}</div>
            <p className="text-xs text-muted-foreground">
              Across {Array.from(new Set(projectsData.map(p => p.leader))).length} team leaders
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {projectsData.filter(p => p.status === 'In Progress').length}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((projectsData.filter(p => p.status === 'In Progress').length / projectsData.length) * 100)}% of all projects
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Avg. Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.round(projectsData.reduce((acc, proj) => acc + proj.progress, 0) / projectsData.length)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Overall project progress
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Project Management</CardTitle>
              <CardDescription>
                View and manage all your projects
              </CardDescription>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search projects..." 
                  className="pl-10 w-[200px] md:w-[250px]" 
                />
              </div>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="my">My Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/40">
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[300px]">Project Name</th>
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Leader</th>
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Team</th>
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Progress</th>
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Due Date</th>
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                        <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[50px]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectsData.map(project => (
                        <tr key={project.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{project.name}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1 mt-1">
                                {project.description}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg" />
                                <AvatarFallback>{project.leader.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="ml-2">{project.leader}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex -space-x-2">
                              {project.members.slice(0, 3).map((member, i) => (
                                <Avatar key={i} className="h-8 w-8 border-2 border-background">
                                  <AvatarImage src="/placeholder.svg" />
                                  <AvatarFallback>{member.charAt(0)}</AvatarFallback>
                                </Avatar>
                              ))}
                              {project.members.length > 3 && (
                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                                  +{project.members.length - 3}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="w-[150px]">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant={
                              project.status === 'In Progress' ? 'default' :
                              project.status === 'Planning' ? 'outline' :
                              project.status === 'Review' ? 'secondary' : 
                              'destructive'
                            }>
                              {project.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="active">
              <div className="flex items-center justify-center h-[200px] border rounded-md">
                <p className="text-muted-foreground">Active projects view to be implemented</p>
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <div className="flex items-center justify-center h-[200px] border rounded-md">
                <p className="text-muted-foreground">Completed projects view to be implemented</p>
              </div>
            </TabsContent>
            
            <TabsContent value="my">
              <div className="flex items-center justify-center h-[200px] border rounded-md">
                <p className="text-muted-foreground">My projects view to be implemented</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
            <CardDescription>
              Upcoming project deadlines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectsData
                .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                .slice(0, 3)
                .map(project => (
                  <div key={project.id} className="flex items-start border-b last:border-b-0 pb-4 last:pb-0">
                    <div className="min-w-16 text-center">
                      <div className="text-2xl font-bold">{new Date(project.dueDate).getDate()}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(project.dueDate).toLocaleString('default', { month: 'short' })}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground mt-1 line-clamp-1">{project.description}</div>
                      <div className="flex items-center mt-2">
                        <Badge variant={
                          project.priority === 'High' ? 'destructive' :
                          project.priority === 'Medium' ? 'default' : 'outline'
                        } className="text-xs">
                          {project.priority} Priority
                        </Badge>
                        <div className="text-xs text-muted-foreground ml-2 flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{project.members.length} members</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Team Workload</CardTitle>
            <CardDescription>
              Project distribution across team members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employeesData.slice(0, 4).map(employee => {
                const projectCount = projectsData.filter(p => p.members.includes(employee.name) || p.leader === employee.name).length;
                return (
                  <div key={employee.id} className="flex items-center border-b last:border-b-0 pb-4 last:pb-0">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={employee.image} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm font-medium">{projectCount} projects</div>
                      </div>
                      <div className="flex items-center mt-2">
                        <Progress value={projectCount * 20} className="h-2 flex-1" />
                        <span className="text-xs ml-2 min-w-10 text-right">{projectCount * 20}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
