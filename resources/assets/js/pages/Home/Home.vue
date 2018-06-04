<template>
  <md-app md-waterfall md-mode="flexible">
    <md-app-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <div class="flex"></div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
      <div class="md-toolbar-row md-toolbar-offset">
        <span class="md-display-1">My Title</span>
      </div>
    </md-app-toolbar>
    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>
        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>
        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>
        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>
    <md-app-content>
      <p v-for="i in 50" :key="i">Lorem ipsum dolor sit amet,</p>
    </md-app-content>
    <md-app-bottom-bar>
      <home-bottom-bar></home-bottom-bar>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
import HomeBottomBar from '../../components/NavBar/HomeBottomBar'
export default {
  name: 'Home',
  components: {
    HomeBottomBar
  },
  data: () => ({
    menuVisible: false
  })
}

</script>
<style lang="scss" scoped>
.md-app {
  min-height: 100%;
  max-width: 100%;
  height: 100%;
  border: 1px solid rgba(#000, .12);
}

.md-app-toolbar {
  height: 196px;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

</style>
