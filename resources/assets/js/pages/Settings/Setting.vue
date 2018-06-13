<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
        </div>
        <div class="flex  md-title">设置</div>
        <div class="md-toolbar-section-end">
        </div>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-card>
        <md-card-header>
          <div class="md-title">Card with hover effect</div>
          <div class="md-subhead">It also have a ripple</div>
        </md-card-header>
        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-card>

      <md-list>
        <md-list-item href="/m/ent/list">
          <md-icon class="md-primary">account_balance</md-icon>
          <span class="md-list-item-text">企业</span>
        </md-list-item>
        <md-list-item>
          <md-icon>track_changes</md-icon>
          <span class="md-list-item-text">巴指数</span>
        </md-list-item>
      </md-list>
      <md-list>
        <md-list-item>
          <md-icon>account_circle</md-icon>
          <span class="md-list-item-text">账号</span>
        </md-list-item>
        <md-list-item>
          <md-icon>feedback</md-icon>
          <span class="md-list-item-text">意见反馈</span>
        </md-list-item>
        <md-list-item>
          <md-icon>assignment</md-icon>
          <span class="md-list-item-text">邀请</span>
        </md-list-item>
        <md-list-item>
          <md-icon>exit_to_app</md-icon>
          <span class="md-list-item-text">退出</span>
        </md-list-item>
      </md-list>
    </md-app-content>
    <md-app-bottom-bar>
      <home-bottom-bar></home-bottom-bar>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import HomeBottomBar from "../../components/BottomBar/HomeBottomBar";
  export default {
    name: "Setting",
    components: {
      HomeBottomBar
    },
    data: () => ({})
  };

</script>
<style lang="scss" scoped>
  .md-app {
    min-height: 100%;
    max-width: 100%;
    height: 100%;
  }

  .md-list {
    margin-bottom: 10px;
  }

  .md-card {
    margin-bottom: 10px;
  }

</style>
