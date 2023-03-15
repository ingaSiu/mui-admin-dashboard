import { LoginLayoutRoutes, MainLayoutRoutes } from './routeTypes';

import Blog from '../Pages/Blog';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import LoginLayout from '../Layouts/loginLayout/LoginLayout';
import MainLayout from '../Layouts/mainLayout/MainLayout';
import ProductsPage from '../Pages/ProductsPage';
import UsersPage from '../Pages/UsersPage';

export const LOGIN_PATH = '/login';

export const DASHBOARD_PATH = '/';
export const USERS_PATH = '/users';
export const PRODUCTS_PATH = '/products';
export const BLOG_PATH = '/blog';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: DASHBOARD_PATH, Component: Dashboard },
    { path: USERS_PATH, Component: UsersPage },
    { path: PRODUCTS_PATH, Component: ProductsPage },
    { path: BLOG_PATH, Component: Blog },
  ],
};

export const loginLayoutRoutes: LoginLayoutRoutes = {
  Layout: LoginLayout,
  routes: [{ path: LOGIN_PATH, Component: Login }],
};
