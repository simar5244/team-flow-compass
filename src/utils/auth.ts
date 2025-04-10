// Authentication and permission utilities

// User roles and their permissions
export const ROLES = {
  ADMIN: 'admin',
  EXECUTIVE: 'executive', // CEO, CFO, etc.
  MANAGER: 'manager',
  EMPLOYEE: 'employee'
};

// Permission definitions
export const PERMISSIONS = {
  VIEW_ALL_DATA: 'view_all_data',
  CREATE_PROJECT: 'create_project',
  DELETE_PROJECT: 'delete_project',
  REASSIGN_MEMBERS: 'reassign_members',
  MARK_COMPLETE: 'mark_complete',
  EDIT_ORGANIZATION: 'edit_organization',
  VIEW_SALARY_INFO: 'view_salary_info',
  VIEW_REPORTS: 'view_reports',
  ACCESS_ADMIN_PANEL: 'access_admin_panel'
};

// Role-based permissions mapping
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_ALL_DATA,
    PERMISSIONS.CREATE_PROJECT,
    PERMISSIONS.DELETE_PROJECT,
    PERMISSIONS.REASSIGN_MEMBERS,
    PERMISSIONS.MARK_COMPLETE,
    PERMISSIONS.EDIT_ORGANIZATION,
    PERMISSIONS.VIEW_SALARY_INFO,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.ACCESS_ADMIN_PANEL
  ],
  [ROLES.EXECUTIVE]: [
    PERMISSIONS.VIEW_ALL_DATA,
    PERMISSIONS.CREATE_PROJECT,
    PERMISSIONS.DELETE_PROJECT,
    PERMISSIONS.REASSIGN_MEMBERS,
    PERMISSIONS.MARK_COMPLETE,
    PERMISSIONS.EDIT_ORGANIZATION,
    PERMISSIONS.VIEW_SALARY_INFO,
    PERMISSIONS.VIEW_REPORTS
  ],
  [ROLES.MANAGER]: [
    PERMISSIONS.CREATE_PROJECT,
    PERMISSIONS.REASSIGN_MEMBERS,
    PERMISSIONS.MARK_COMPLETE,
    PERMISSIONS.VIEW_REPORTS
  ],
  [ROLES.EMPLOYEE]: []
};

// Check if current user has specific permission
export const hasPermission = (permission: string): boolean => {
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  if (!userData.role) return false;
  
  const userRole = userData.role;
  return ROLE_PERMISSIONS[userRole]?.includes(permission) || false;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  return userData.isAuthenticated === true;
};

// Get current user data
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser') || '{}');
};

// Check if ERP is connected
export const isErpConnected = (): boolean => {
  const erpData = JSON.parse(localStorage.getItem('erpConnection') || '{}');
  return erpData.connected === true;
};

// Logout function
export const logout = () => {
  localStorage.removeItem('currentUser');
  // Optionally clear other data in localStorage if needed
  // Keep ERP connection for simplicity in this demo
};
