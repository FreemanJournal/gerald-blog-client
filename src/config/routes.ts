import IRoute from '../interfaces/route';
import BLogPage from '../pages/blog';
import EditPage from '../pages/edit';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const authRoutes: IRoute[] = [
    {
        path:'/login',
        auth:false,
        element:LoginPage,
        name:'Login'
    },
    {
        path:'/register',
        auth:false,
        element:LoginPage,
        name:'Register'
    }
];

const blogRoutes: IRoute[] = [
    {
        path:'/edit',
        auth:true,
        element:EditPage,
        name:'Edit'
    },
    {
        path:'/edit/:blogID',
        auth:true,
        element:EditPage,
        name:'Edit'
    },
    {
        path:'/blog/:blogID',
        auth:false,
        element:BLogPage,
        name:'Blog'
    }
];

const mainRoutes: IRoute[] = [
    {
        path:'/',
        auth:false,
        element:HomePage,
        name:'Home'
    }
];

const routes:IRoute[] = [
    ...authRoutes,
    ...blogRoutes,
    ...mainRoutes
]

export default routes;