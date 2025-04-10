
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  FolderKanban, 
  Network, 
  MessageSquare, 
  User, 
  Menu, 
  X, 
  Home,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  title: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: Home },
  { title: 'Organization', path: '/organization', icon: Network },
  { title: 'Heatmap', path: '/heatmap', icon: BarChart3 },
  { title: 'Projects', path: '/projects', icon: FolderKanban },
  { title: 'Team', path: '/team', icon: Users },
  { title: 'Discussion', path: '/discussion', icon: MessageSquare },
  { title: 'Profile', path: '/profile', icon: User },
  { title: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "h-screen bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {expanded && (
          <h1 className="text-xl font-bold text-white">TeamFlow</h1>
        )}
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="p-1 rounded-md hover:bg-sidebar-accent"
        >
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 transition-colors hover:bg-sidebar-accent",
                  location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                )}
              >
                <item.icon size={20} />
                {expanded && <span className="ml-3">{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        {expanded ? (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-sidebar-foreground/70">Project Manager</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mx-auto">
            JD
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
