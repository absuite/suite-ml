const routeList = [
    { path: '/', name: 'home', page: 'Messages/Message.vue' },
    { path: '/m/messages', name: 'messages', page: 'Messages/Message.vue' },
    { path: '/m/reports', name: 'reports', page: 'Reports/Report.vue' },
    { path: '/m/settings', name: 'settings', page: 'Settings/Setting.vue' },
    { path: '/m/works', name: 'works', page: 'Works/Work.vue' },
];

routeList.push({ path: '/m/cbo/dept/list', name: 'cbo.dept.list', page: 'Dept/List.vue', meta: { keepAlive: true } });

routeList.push({ path: '/m/cbo/item/list', name: 'cbo.item.list', page: 'Item/List.vue', meta: { keepAlive: true } });

routeList.push({ path: '/m/cbo/doc-type/list', name: 'cbo.doc.type.list', page: 'DocType/List.vue', meta: { keepAlive: true } });


routeList.push({ path: '/m/rpt/profit/rank', name: 'rpt.profit.rank', page: 'RptProfit/Rank.vue', meta: { keepAlive: true } });
routeList.push({ path: '/m/rpt/profit/trend', name: 'rpt.profit.trend', page: 'RptProfit/Trend.vue', meta: { keepAlive: true } });
routeList.push({ path: '/m/rpt/expend/analy', name: 'rpt.expend.analy', page: 'RptExpend/Analy.vue', meta: { keepAlive: true } });
routeList.push({ path: '/m/rpt/income/analy', name: 'rpt.income.analy', page: 'RptIncome/Analy.vue', meta: { keepAlive: true } });
routeList.push({ path: '/m/rpt/achieve/total', name: 'rpt.achieve.total', page: 'RptAchieve/Total.vue', meta: { keepAlive: true } });
routeList.push({ path: '/m/rpt/biz/biz-total', name: 'rpt.biz.total', page: 'RptBiz/Total.vue', meta: { keepAlive: true } });

const mappedRoutes = routeList.map(route => ({
    ...route,
    component: () =>
        import (`../pages/${route.page}`)
}));

export default mappedRoutes;