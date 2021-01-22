import React from 'react';

const Dashboard = React.lazy(() => import('../../Pages/Dashboard'));
const Users = React.lazy(() => import('../../Pages/Users'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true, isPrivate: true },
  { path: '/users', name: 'Users', component: Users, exact: true, isPrivate: true },
];

export default routes;
