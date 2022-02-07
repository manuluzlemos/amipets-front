import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

import { CreateCountForm } from './components/CreateCountForm';
import { Dashboard } from './components/Dashboard';
import { LoginForm } from './components/LoginForm';
import { Presentation } from './components/Presentation';
import { AuthContext } from './contexts/auth';
import { MainLayout } from './pages/MainLayout';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: '/', element: <Presentation />},
      {path: '/login', element: <LoginForm />},
      {path: '/create', element: <CreateCountForm />},
      {path: '/home', element: <Dashboard page="home" />},
      {path: '/filtro', element: <Dashboard page="filtro" />},
      {path: '/salvos', element: <Dashboard page="salvos" />},
      {path: '/publicados', element: <Dashboard page="publicados" />},
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return(
    <>
      {routing}
    </>
  );
};

export default App;