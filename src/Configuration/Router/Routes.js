import React from 'react';

const Dashboard = React.lazy(() => import('../../Pages/Dashboard'));
const Users = React.lazy(() => import('../../Pages/Users'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true, isPrivate: false },
  { path: '/users', name: 'Users', component: Users, exact: true, isPrivate: false },
];

export default routes;
