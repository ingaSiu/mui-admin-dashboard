import { Navigate, Route, Routes as RoutesWrapper } from 'react-router-dom';
import { loginLayoutRoutes, mainLayoutRoutes } from './consts';

const Routes = () => {
  const { routes, Layout } = mainLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
