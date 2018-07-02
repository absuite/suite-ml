const rs = [
  { path: '/', name: 'home', page: 'Reports/Report.vue' , meta: { keepAlive: true ,title:'报表'}},
  { path: '/m/reports', name: 'reports', page: 'Reports/Report.vue' , meta: { keepAlive: true ,title:'报表'}},
  { path: '/m/settings', name: 'settings', page: 'Settings/Setting.vue' , meta: { keepAlive: true ,title:'设置'}},
  { path: '/m/works', name: 'works', page: 'Works/Work.vue' , meta: { keepAlive: true ,title:'工作'}},
];
//cbo
rs.push({ path: '/m/cbo/dept/list', name: 'cbo.dept.list', page: 'CboDept/List.vue', meta: { keepAlive: true ,title:'部门列表'} });
rs.push({ path: '/m/cbo/dept/edit', name: 'cbo.dept.edit', page: 'CboDept/Edit.vue', meta: { keepAlive: true ,title:'部门编辑'} });

rs.push({ path: '/m/cbo/item/list', name: 'cbo.item.list', page: 'CboItem/List.vue', meta: { keepAlive: true ,title:'物料列表'} });
rs.push({ path: '/m/cbo/item/edit', name: 'cbo.item.edit', page: 'CboItem/Edit.vue', meta: { keepAlive: true ,title:'物料编辑'} });

rs.push({ path: '/m/cbo/doc-type/list', name: 'cbo.doc.type.list', page: 'CboDocType/List.vue', meta: { keepAlive: true ,title:'单据列表'} });
rs.push({ path: '/m/cbo/doc-type/edit', name: 'cbo.doc.type.edit', page: 'CboDocType/Edit.vue', meta: { keepAlive: true ,title:'单据编辑'} });

//amiba
rs.push({ path: '/m/amb/purpose/list', name: 'amb.purpose.list', page: 'AmbPurpose/List.vue', meta: { keepAlive: true ,title:'核算目的列表'} });
rs.push({ path: '/m/amb/element/list', name: 'amb.element.list', page: 'AmbElement/List.vue', meta: { keepAlive: true ,title:'核算要素列表'} });
rs.push({ path: '/m/amb/group/list', name: 'amb.group.list', page: 'AmbGroup/List.vue', meta: { keepAlive: true ,title:'阿米巴列表'} });

rs.push({ path: '/m/rpt/profit/rank', name: 'rpt.profit.rank', page: 'RptProfit/Rank.vue', meta: { keepAlive: true ,title:'利润排名'} });
rs.push({ path: '/m/rpt/profit/trend', name: 'rpt.profit.trend', page: 'RptProfit/Trend.vue', meta: { keepAlive: true ,title:'利润趋势'} });
rs.push({ path: '/m/rpt/expend/analy', name: 'rpt.expend.analy', page: 'RptExpend/Analy.vue', meta: { keepAlive: true,title:'支出分析' } });
rs.push({ path: '/m/rpt/income/analy', name: 'rpt.income.analy', page: 'RptIncome/Analy.vue', meta: { keepAlive: true,title:'支出分析' } });
rs.push({ path: '/m/rpt/achieve/total', name: 'rpt.achieve.total', page: 'RptAchieve/Total.vue', meta: { keepAlive: true,title:'经营业绩' } });
rs.push({ path: '/m/rpt/biz/total', name: 'rpt.biz.total', page: 'RptBiz/Total.vue', meta: { keepAlive: true ,title:'业务明细'} });

rs.push({ path: '/m/ent/list', name: 'ent.list', page: 'Ent/List.vue' , meta: { title:'业务列表'}});
rs.push({ path: '/m/ent/search', name: 'ent.search', page: 'Ent/Search.vue', meta: {title:'查询企业'} });
rs.push({ path: '/m/ent/select', name: 'ent.select', page: 'Ent/Select.vue' , meta: {title:'选择企业'}});
const mappedRoutes = rs.map(route => ({
  ...route,
  component: () =>
    import(`../pages/${route.page}`)
}));

export default mappedRoutes;