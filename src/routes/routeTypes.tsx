import { PropsWithChildren } from 'react';

type MainRoute = {
  path: '/' | '/users' | '/products' | '/blog';
  Component: () => JSX.Element;
};

type LoginRoute = {
  path: '/login';
  Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
};

export type LoginLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: LoginRoute[];
};
