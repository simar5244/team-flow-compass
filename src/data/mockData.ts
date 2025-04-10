
// Mock organization data
export const organizationData = {
  id: 1,
  name: "CEO",
  title: "Chief Executive Officer",
  department: "Executive",
  image: "/placeholder.svg",
  children: [
    {
      id: 2,
      name: "CTO",
      title: "Chief Technology Officer",
      department: "Technology",
      image: "/placeholder.svg",
      children: [
        {
          id: 5,
          name: "Dev Manager",
          title: "Development Manager",
          department: "Development",
          image: "/placeholder.svg",
          children: [
            {
              id: 9,
              name: "Senior Dev",
              title: "Senior Developer",
              department: "Development",
              image: "/placeholder.svg",
              children: [
                {
                  id: 13,
                  name: "Junior Dev 1",
                  title: "Junior Developer",
                  department: "Development",
                  image: "/placeholder.svg",
                  children: []
                },
                {
                  id: 14,
                  name: "Junior Dev 2",
                  title: "Junior Developer",
                  department: "Development",
                  image: "/placeholder.svg",
                  children: []
                }
              ]
            },
            {
              id: 10,
              name: "Senior QA",
              title: "Senior QA Engineer",
              department: "Quality Assurance",
              image: "/placeholder.svg",
              children: []
            }
          ]
        },
        {
          id: 6,
          name: "IT Manager",
          title: "IT Manager",
          department: "IT",
          image: "/placeholder.svg",
          children: []
        }
      ]
    },
    {
      id: 3,
      name: "CFO",
      title: "Chief Financial Officer",
      department: "Finance",
      image: "/placeholder.svg",
      children: [
        {
          id: 7,
          name: "Finance Manager",
          title: "Finance Manager",
          department: "Finance",
          image: "/placeholder.svg",
          children: []
        }
      ]
    },
    {
      id: 4,
      name: "CMO",
      title: "Chief Marketing Officer",
      department: "Marketing",
      image: "/placeholder.svg",
      children: [
        {
          id: 8,
          name: "Marketing Manager",
          title: "Marketing Manager",
          department: "Marketing",
          image: "/placeholder.svg",
          children: []
        }
      ]
    }
  ]
};

// Mock heatmap data
export const collaborationData = [
  { from: "CEO", to: "CTO", value: 0.8 },
  { from: "CEO", to: "CFO", value: 0.7 },
  { from: "CEO", to: "CMO", value: 0.6 },
  { from: "CTO", to: "Dev Manager", value: 0.9 },
  { from: "CTO", to: "IT Manager", value: 0.5 },
  { from: "CFO", to: "Finance Manager", value: 0.8 },
  { from: "CMO", to: "Marketing Manager", value: 0.7 },
  { from: "Dev Manager", to: "Senior Dev", value: 0.9 },
  { from: "Dev Manager", to: "Senior QA", value: 0.6 },
  { from: "Senior Dev", to: "Junior Dev 1", value: 0.8 },
  { from: "Senior Dev", to: "Junior Dev 2", value: 0.7 },
  { from: "CTO", to: "CFO", value: 0.2 },
  { from: "CTO", to: "CMO", value: 0.1 },
  { from: "CFO", to: "CMO", value: 0.3 },
  { from: "Dev Manager", to: "IT Manager", value: 0.4 },
  { from: "Marketing Manager", to: "IT Manager", value: 0.2 },
  { from: "Marketing Manager", to: "Finance Manager", value: 0.3 },
  { from: "Finance Manager", to: "IT Manager", value: 0.1 },
];

// Mock projects data
export const projectsData = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    progress: 75,
    priority: "High",
    dueDate: "2025-05-15",
    leader: "Dev Manager",
    members: ["Senior Dev", "Junior Dev 1", "Marketing Manager"],
    status: "In Progress"
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Create a new mobile app for customer engagement",
    progress: 30,
    priority: "Medium",
    dueDate: "2025-07-20",
    leader: "Senior Dev",
    members: ["Junior Dev 2", "Senior QA"],
    status: "In Progress"
  },
  {
    id: 3,
    name: "Financial Report Q2",
    description: "Prepare and finalize Q2 financial report",
    progress: 90,
    priority: "High",
    dueDate: "2025-04-30",
    leader: "Finance Manager",
    members: ["CFO"],
    status: "Review"
  },
  {
    id: 4,
    name: "Infrastructure Upgrade",
    description: "Upgrade company servers and network infrastructure",
    progress: 15,
    priority: "Medium",
    dueDate: "2025-08-10",
    leader: "IT Manager",
    members: ["CTO"],
    status: "Planning"
  },
  {
    id: 5,
    name: "Marketing Campaign",
    description: "Launch summer marketing campaign across all channels",
    progress: 50,
    priority: "High",
    dueDate: "2025-06-01",
    leader: "Marketing Manager",
    members: ["CMO", "Junior Dev 1"],
    status: "In Progress"
  }
];

// Mock employee data for profiles
export const employeesData = [
  {
    id: 1,
    name: "John Smith",
    position: "Chief Executive Officer",
    department: "Executive",
    email: "john.smith@company.com",
    phone: "(555) 123-4567",
    location: "New York",
    hireDate: "2018-01-15",
    manager: null,
    workHours: 42,
    ptoBalance: 15,
    salary: 250000,
    projects: ["Website Redesign", "Marketing Campaign"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Emily Johnson",
    position: "Chief Technology Officer",
    department: "Technology",
    email: "emily.johnson@company.com",
    phone: "(555) 234-5678",
    location: "San Francisco",
    hireDate: "2019-03-22",
    manager: "John Smith",
    workHours: 45,
    ptoBalance: 12,
    salary: 210000,
    projects: ["Mobile App Development", "Infrastructure Upgrade"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Michael Williams",
    position: "Development Manager",
    department: "Development",
    email: "michael.williams@company.com",
    phone: "(555) 345-6789",
    location: "San Francisco",
    hireDate: "2020-06-10",
    manager: "Emily Johnson",
    workHours: 40,
    ptoBalance: 10,
    salary: 150000,
    projects: ["Website Redesign", "Mobile App Development"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Jessica Brown",
    position: "Senior Developer",
    department: "Development",
    email: "jessica.brown@company.com",
    phone: "(555) 456-7890",
    location: "Austin",
    hireDate: "2021-02-15",
    manager: "Michael Williams",
    workHours: 38,
    ptoBalance: 8,
    salary: 120000,
    projects: ["Mobile App Development", "Website Redesign"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "David Miller",
    position: "Junior Developer",
    department: "Development",
    email: "david.miller@company.com",
    phone: "(555) 567-8901",
    location: "Austin",
    hireDate: "2022-09-01",
    manager: "Jessica Brown",
    workHours: 40,
    ptoBalance: 5,
    salary: 85000,
    projects: ["Website Redesign"],
    image: "/placeholder.svg"
  }
];

// Dashboard statistics
export const dashboardStats = {
  activeProjects: 5,
  completedProjects: 12,
  totalEmployees: 24,
  departmentsCount: 6,
  averageProjectCompletion: 65,
  upcomingDeadlines: 3
};

// Activity feed data
export const activityFeed = [
  {
    id: 1,
    user: "Emily Johnson",
    action: "created a new project",
    target: "Mobile App Development",
    timestamp: "2025-04-09T14:32:00Z"
  },
  {
    id: 2,
    user: "Michael Williams",
    action: "assigned task to",
    target: "David Miller",
    timestamp: "2025-04-09T11:15:00Z"
  },
  {
    id: 3,
    user: "Jessica Brown",
    action: "completed task",
    target: "Homepage Redesign",
    timestamp: "2025-04-08T16:45:00Z"
  },
  {
    id: 4,
    user: "John Smith",
    action: "scheduled meeting with",
    target: "Marketing Team",
    timestamp: "2025-04-08T10:30:00Z"
  },
  {
    id: 5,
    user: "David Miller",
    action: "commented on",
    target: "Website Redesign",
    timestamp: "2025-04-07T15:22:00Z"
  }
];
