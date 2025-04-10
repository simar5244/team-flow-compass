
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, UserCircle2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OrgNode {
  id: number;
  name: string;
  title: string;
  department: string;
  image: string;
  children: OrgNode[];
}

interface OrgTreeNodeProps {
  node: OrgNode;
  level: number;
}

const OrgTreeNode: React.FC<OrgTreeNodeProps> = ({ node, level }) => {
  const [expanded, setExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <div className="org-tree-node">
      <div 
        className={cn(
          "flex items-center p-2 rounded-md transition-colors mb-1",
          level === 0 ? "bg-primary text-primary-foreground" : "hover:bg-muted"
        )}
      >
        {hasChildren ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 mr-1" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </Button>
        ) : (
          <div className="w-7"></div>
        )}
        
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={node.image} alt={node.name} />
          <AvatarFallback>{node.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="font-medium">{node.name}</div>
          <div className="text-xs text-muted-foreground">{node.title}</div>
        </div>
        
        <div className="text-xs px-2 py-1 rounded-full bg-muted">
          {node.department}
        </div>
      </div>
      
      {expanded && hasChildren && (
        <div className="pl-6 border-l border-dashed border-border ml-4">
          {node.children.map((child) => (
            <OrgTreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface OrgTreeProps {
  data: OrgNode;
  className?: string;
}

const OrgTree: React.FC<OrgTreeProps> = ({ data, className }) => {
  return (
    <div className={cn("org-tree", className)}>
      <OrgTreeNode node={data} level={0} />
    </div>
  );
};

export default OrgTree;
