const routeList = [{
    path: '/m/messages',
    name: 'messages',
    page: 'Messages/Message.vue'
  },
  {
    path: '/m/reports',
    name: 'reports',
    page: 'Reports/Report.vue'
  },
  {
    path: '/m/settings',
    name: 'settings',
    page: 'Settings/Setting.vue'
  },
  {
    path: '/m/works',
    name: 'works',
    page: 'Works/Work.vue'
  },
];
const mappedRoutes = routeList.map(route => ({
  ...route,
  component: () => import(`../pages/${route.page}`)
}));

export default mappedRoutes;