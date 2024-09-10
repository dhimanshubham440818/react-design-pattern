// all public module 
import Home from '../Module/Public/Home'
import Blog from '../Module/Public/Blog'
import Services from '../Module/Public/Services'
import About from '../Module/Public/About'
import Login from '../Module/Public/Login'
import Register from '../Module/Public/Register'

// all employee module 
import EmployeeDashboard from '../Module/Employee/EmployeeDashboard'
import Attendance from '../Module/Employee/Attendance'
import EmployeeDirectory from '../Module/Employee/EmployeeDirectory'
import MyTask from '../Module/Employee/MyTask'

// all manager module 
import ManagerDashboard from '../Module/Manager/ManagerDashboard'
import ResourceAllocation from '../Module/Manager/ResourceAllocation'
import ProjectManagement from '../Module/Manager/ProjectManagement'
import TeamOverview from '../Module/Manager/TeamOverview'

// all admin module 
import AdminDashboard from '../Module/Admin/AdminDashboard'
import MangeRole from '../Module//Admin/MangeRole'
import Reports from '../Module/Admin/Reports'
import UserManagement from '../Module/Admin/UserManagement'

// Not Fount Page 
import NotFound from '../Module/NotFound/NotFound'

// all userTypes define here 
const userTypes = {
    public: 'public',
    employee: 'employee',
    admin: 'admin',
    manager: 'manager'
};


// all website url define here 
const url = {

    // public urls 
    public_url: {
        home: '/',
        blog: '/public/blog',
        services: '/public/services',
        about: '/public/about',
        login: '/public/login',
        register: '/public/register',
    },

    // employee urls 
    employee_url: {
        dashboard: '/employee/dashboard',
        attendance: '/employee/attendance',
        directory: '/employee/directory',
        mytask: '/employee/mytask',
    },

    // manager urls 
    manager_url: {
        dashboard: '/manager/dashboard',
        projectManagement: '/manager/project-management',
        resourceAllocation: '/manager/resource-allocation',
        teamOverview: '/manager/teamoverview',
    },

    // admin urls 
    admin_url: {
        dashboard: '/admin/dashboard',
        common: '/admin/common-compoent',
        manageRole: '/admin/manage-role',
        report: '/admin/report',
        userManagement: '/admin/user-management',
    },

    // Not found 
    not_found_url: {
        notFound: '*',
    },
    
};


// all component configration 
const allCompoents = [

    // all public routes
    { url: url.public_url.home, type: userTypes.public, component: <Home /> },
    { url: url.public_url.blog, type: userTypes.public, component: <Blog /> },
    { url: url.public_url.services, type: userTypes.public, component: <Services /> },
    { url: url.public_url.about, type: userTypes.public, component: <About /> },
    { url: url.public_url.login, type: userTypes.public, component: <Login /> },
    { url: url.public_url.register, type: userTypes.public, component: <Register /> },

    // all employee routes
    { url: url.employee_url.dashboard, type: userTypes.employee, component: <EmployeeDashboard /> },
    { url: url.employee_url.attendance, type: userTypes.employee, component: <Attendance /> },
    { url: url.employee_url.directory, type: userTypes.employee, component: <EmployeeDirectory /> },
    { url: url.employee_url.mytask, type: userTypes.employee, component: <MyTask /> },

    // all manager routes
    { url: url.manager_url.dashboard, type: userTypes.manager, component: <ManagerDashboard /> },
    { url: url.manager_url.projectManagement, type: userTypes.manager, component: <ProjectManagement /> },
    { url: url.manager_url.resourceAllocation, type: userTypes.manager, component: <ResourceAllocation /> },
    { url: url.manager_url.teamOverview, type: userTypes.manager, component: <TeamOverview /> },

    // all admin routes
    { url: url.admin_url.common, type: userTypes.admin, component: <ProjectManagement /> },
    { url: url.admin_url.dashboard, type: userTypes.admin, component: <AdminDashboard /> },
    { url: url.admin_url.manageRole, type: userTypes.admin, component: <MangeRole /> },
    { url: url.admin_url.report, type: userTypes.admin, component: <Reports /> },
    { url: url.admin_url.userManagement, type: userTypes.admin, component: <UserManagement /> },

    // 404 page
    { url: url.not_found_url.notFound, type: userTypes.public, component: <NotFound /> },

];


// export define data 
export { allCompoents, userTypes, url };
