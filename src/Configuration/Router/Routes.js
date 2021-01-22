import React from 'react';

const Dashboard = React.lazy(() => import('../../Pages/Dashboard'));
const Items = React.lazy(() => import('../../Pages/Items'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true, isPrivate: true },
  { path: '/items', name: 'Items', component: Items, exact: true, isPrivate: true },
];

export default routes;
