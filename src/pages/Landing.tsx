
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { isAuthenticated } from '@/utils/auth';

const Landing = () => {
  const navigate = useNavigate();
  const isUserAuthenticated = isAuthenticated();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Team Flow Compass
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Visualize organizational structures, improve team collaboration, and manage projects seamlessly with ERP integration
          </p>
          
          {isUserAuthenticated ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/organization')}>
                View Organization
              </Button>
              <Button size="lg" onClick={() => navigate('/projects')}>
                Manage Projects
              </Button>
            </div>
          ) : (
            <Button size="lg" onClick={() => navigate('/login')}>
              Get Started
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Organization Mapping</CardTitle>
              <CardDescription>Visualize your entire organizational structure</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Connect to your existing ERP system to automatically generate organizational charts showing reporting structures and hierarchies in multiple views.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Collaboration Insights</CardTitle>
              <CardDescription>See how teams work together</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Interactive heatmaps reveal collaboration patterns across departments, helping identify siloes and opportunities for improved cross-functional coordination.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
              <CardDescription>Streamlined project workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Create project blueprints, assign team members across departments, and enable role-based communication and feedback systems.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Supported ERP Systems
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center p-4">
              <div className="text-xl font-semibold">SAP</div>
            </div>
            <div className="text-center p-4">
              <div className="text-xl font-semibold">Workday</div>
            </div>
            <div className="text-center p-4">
              <div className="text-xl font-semibold">PeopleSoft</div>
            </div>
            <div className="text-center p-4">
              <div className="text-xl font-semibold">Oracle HCM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
