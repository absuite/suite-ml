<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content>
      <md-subheader>基础设置</md-subheader>
      <md-layout-grid :md-cols="3" :md-show-lr-borders="false">
        <md-layout-grid-item md-link="/m/cbo/dept/list">
          <md-icon slot="icon">account_box</md-icon>
          <span slot="label">部门</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/cbo/item/list">
          <md-icon slot="icon">dns</md-icon>
          <span slot="label">物料</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/cbo/doc-type/list">
          <md-icon slot="icon">book</md-icon>
          <span slot="label">单据类型</span>
        </md-layout-grid-item>
      </md-layout-grid>
      <md-subheader>阿米巴设置</md-subheader>
      <md-layout-grid :md-cols="3" :md-show-lr-borders="false">
        <md-layout-grid-item md-link="/m/amb/purpose/list">
          <md-icon slot="icon">all_out</md-icon>
          <span slot="label">核算目的</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/amb/element/list">
          <md-icon slot="icon">aspect_ratio</md-icon>
          <span slot="label">核算要素</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/amb/group/list">
          <md-icon slot="icon">group_work</md-icon>
          <span slot="label">阿米巴单元</span>
        </md-layout-grid-item>
      </md-layout-grid>
      <md-subheader>阿米巴日常</md-subheader>
      <md-layout-grid :md-cols="3" :md-show-lr-borders="false">
        <md-layout-grid-item md-link="/m/amb/dti/list">
          <md-icon slot="icon">library_add</md-icon>
          <span slot="label">接口执行</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/amb/distribute/list">
          <md-icon slot="icon">view_quilt</md-icon>
          <span slot="label">费用分配</span>
        </md-layout-grid-item>
        <md-layout-grid-item md-link="/m/amb/accounting/list">
          <md-icon slot="icon">album</md-icon>
          <span slot="label">经营核算</span>
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
    name: "Work",
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
