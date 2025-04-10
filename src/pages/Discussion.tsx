
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Plus, ThumbsUp, MessageCircle, Share, Bookmark, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock discussion topics
const discussionTopics = [
  {
    id: 1,
    title: "Website Redesign Project Requirements",
    author: "John Smith",
    authorRole: "Chief Executive Officer",
    authorAvatar: "/placeholder.svg",
    date: "2025-04-06T10:30:00Z",
    content: "Team, I'd like to discuss the requirements for our upcoming website redesign project. We need to focus on improving user experience, modernizing the design, and ensuring mobile responsiveness. Please share your thoughts and ideas.",
    likes: 12,
    comments: 8,
    tags: ["Website", "Design", "UX"],
    pinned: true
  },
  {
    id: 2,
    title: "Mobile App Development Team Structure",
    author: "Emily Johnson",
    authorRole: "Chief Technology Officer",
    authorAvatar: "/placeholder.svg",
    date: "2025-04-05T14:15:00Z",
    content: "Let's discuss the team structure for our new mobile app development project. We'll need to establish clear roles and responsibilities to ensure efficient development and quality delivery.",
    likes: 8,
    comments: 5,
    tags: ["Mobile", "Development", "Team Structure"],
    pinned: false
  },
  {
    id: 3,
    title: "Q2 Marketing Campaign Coordination",
    author: "David Miller",
    authorRole: "Marketing Manager",
    authorAvatar: "/placeholder.svg",
    date: "2025-04-04T09:45:00Z",
    content: "We need to coordinate our efforts for the upcoming Q2 marketing campaign. This will involve multiple departments and I'd like to gather input from all stakeholders about timeline and resource allocation.",
    likes: 5,
    comments: 3,
    tags: ["Marketing", "Campaign", "Q2"],
    pinned: false
  }
];

// Mock comments
const discussionComments = [
  {
    id: 1,
    topicId: 1,
    author: "Michael Williams",
    authorRole: "Development Manager",
    authorAvatar: "/placeholder.svg",
    date: "2025-04-06T11:20:00Z",
    content: "I think we should start by conducting user research to identify pain points with the current website. This will help us prioritize the redesign efforts.",
    likes: 4
  },
  {
    id: 2,
    topicId: 1,
    author: "Jessica Brown",
    authorRole: "Senior Developer",
    authorAvatar: "/placeholder.svg",
    date: "2025-04-06T12:45:00Z",
    content: "We should also consider the technical constraints and ensure that the new design is compatible with our CMS and other backend systems.",
    likes: 3
  },
  {
    id: 3,
    topicId: 1,
    author: "Emily Johnson",
    authorRole: "Chief Technology Officer",
    authorAvatar: "/placeholder.svg",
    date: "2025-04-06T14:10:00Z",
    content: "Good points. I'd add that we should prioritize accessibility in the new design. Let's make sure we're WCAG compliant from the start.",
    likes: 6
  }
];

const Discussion = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Discussion Forum</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Discussion
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Project Discussions</CardTitle>
                  <CardDescription>
                    Collaborate with your team members on various projects
                  </CardDescription>
                </div>
                
                <div className="flex items-center gap-2">
                  <Tabs defaultValue="all" className="w-[300px]">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="my">My Discussions</TabsTrigger>
                      <TabsTrigger value="pinned">Pinned</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {discussionTopics.map(topic => (
                  <Card key={topic.id} className={topic.pinned ? "border-primary" : ""}>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={topic.authorAvatar} />
                          <AvatarFallback>{topic.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium">{topic.author}</span>
                              <span className="text-xs text-muted-foreground ml-2">{topic.authorRole}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(topic.date).toLocaleString()}
                            </div>
                          </div>
                          
                          <h3 className="font-medium text-lg mt-2">
                            {topic.title}
                            {topic.pinned && (
                              <Badge variant="outline" className="ml-2">Pinned</Badge>
                            )}
                          </h3>
                          
                          <p className="mt-2 text-sm">{topic.content}</p>
                          
                          <div className="flex items-center mt-4 space-x-2">
                            {topic.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center mt-4 pt-4 border-t border-border">
                            <Button variant="ghost" size="sm" className="text-xs">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {topic.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {topic.comments}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                              <Share className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs ml-auto">
                              <Bookmark className="h-4 w-4 mr-1" />
                              Save
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Discussion</CardTitle>
              <CardDescription>
                Website Redesign Project Requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discussionComments.map(comment => (
                  <div key={comment.id} className="flex items-start pb-4 border-b last:border-b-0 border-border last:pb-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.authorAvatar} />
                      <AvatarFallback>{comment.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(comment.date).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm mt-1">{comment.content}</p>
                      <Button variant="ghost" size="sm" className="text-xs mt-1">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {comment.likes}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-2">Add your comment</h4>
                <Textarea placeholder="Write your thoughts..." className="mb-2" />
                <Button size="sm">Post Comment</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
              <CardDescription>
                Browse discussions by topic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Website</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Design</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">UX</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Mobile</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Development</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Marketing</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Strategy</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Planning</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Campaign</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Team</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Finance</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">Budget</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Active Users</CardTitle>
              <CardDescription>
                Team members engaged in discussions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {employeesData.slice(0, 5).map(employee => (
                  <div key={employee.id} className="flex items-center">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={employee.image} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{employee.name}</p>
                      <p className="text-xs text-muted-foreground">{employee.position}</p>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
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

export default Discussion;
