<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content>
      <md-layout-grid :md-cols="3" :md-show-lr-borders="false">
        <md-layout-grid-item md-link="/m/rpt/profit/rank">
          <md-icon slot="icon">multiline_chart</md-icon>
          <span slot="label">利润排名</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/rpt/profit/trend">
          <md-icon slot="icon">timeline</md-icon>
          <span slot="label">利润趋势</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/rpt/expend/analy">
          <md-icon slot="icon">pie_chart</md-icon>
          <span slot="label">支出分析</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/rpt/income/analy">
          <md-icon slot="icon">bubble_chart</md-icon>
          <span slot="label">收入分析</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/rpt/achieve/total">
          <md-icon slot="icon">assessment</md-icon>
          <span slot="label">经营业绩</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/rpt/biz/total">
          <md-icon slot="icon">receipt</md-icon>
          <span slot="label">业务明细</span>
        </md-layout-grid-item>
      </md-layout-grid>
    </md-app-content>
    <md-app-bottom-bar>
      <home-bottom-bar></home-bottom-bar>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import HomeBottomBar from "../../components/BottomBar/HomeBottomBar";
  export default {
    name: "Report",
    components: {
      HomeBottomBar
    },
    data: () => ({
      menuVisible: false
    })
  };

</script>
<style lang="scss" scoped>
  .md-app {
    min-height: 100%;
    max-width: 100%;
    height: 100%;
  }

  .md-layout-grid {
    background: white;
  }

</style>
