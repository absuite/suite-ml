const routeList = [{
    path: '/',
    name: 'home',
    component: () =>
      import ('../pages/Home/Home')
  },
];
export default routeList;