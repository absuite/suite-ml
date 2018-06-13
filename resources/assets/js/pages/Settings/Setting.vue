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
      <md-x-cell-group>
        <md-x-cell title="企业" icon="md:account_balance" is-link to="/m/ent/list" />
        <md-x-cell title="巴指数" icon="md:track_changes" is-link  />
      </md-x-cell-group>
      <md-x-cell-group>
        <md-x-cell title="账号" icon="md:account_circle" is-link />
        <md-x-cell title="意见反馈" icon="md:feedback"  is-link/>
        <md-x-cell title="邀请" icon="md:assignment" is-link/>
        <md-x-cell title="退出" icon="md:exit_to_app" is-link/>
      </md-x-cell-group>
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

  .md-x-cell-group {
    margin-bottom: 10px;
  }

  .md-card {
    margin-bottom: 10px;
  }

</style>
