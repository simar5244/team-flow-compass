
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ErpConnect from "./pages/ErpConnect";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/Organization";
import Heatmap from "./pages/Heatmap";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Discussion from "./pages/Discussion";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes that need authentication but not ERP */}
          <Route 
            path="/erp-connect" 
            element={
              <ProtectedRoute requireErp={false}>
                <ErpConnect />
              </ProtectedRoute>
            } 
          />
          
          {/* Protected routes that need both authentication and ERP */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Layout><Dashboard /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/organization" 
            element={
              <ProtectedRoute>
                <Layout><Organization /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/heatmap" 
            element={
              <ProtectedRoute>
                <Layout><Heatmap /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <ProtectedRoute>
                <Layout><Projects /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/team" 
            element={
              <ProtectedRoute>
                <Layout><Team /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/discussion" 
            element={
              <ProtectedRoute>
                <Layout><Discussion /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Layout><Profile /></Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Layout><Admin /></Layout>
              </ProtectedRoute>
            } 
          />
          
          {/* Default route */}
          <Route index element={<Navigate to="/landing" replace />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
