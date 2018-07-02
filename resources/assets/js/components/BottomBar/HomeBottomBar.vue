<template>
  <md-bottom-bar md-sync-route>
    <md-bottom-bar-item to="/m/works" md-label="工作" md-icon="dashboard"></md-bottom-bar-item>
    <md-bottom-bar-item to="/" md-label="报表" md-icon="assessment"></md-bottom-bar-item>
    <md-bottom-bar-item to="/m/settings" md-label="我的" md-icon="perm_identity"></md-bottom-bar-item>
  </md-bottom-bar>
</template>
<script>
export default {
  name: 'HomeBottomBar',
  data: () => ({
    menuVisible: false
  }),
  methods: {},
  created() {},
  mounted() {

  }
}

</script>
