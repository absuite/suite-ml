<template>
    <md-app md-waterfall md-mode="fixed">    
        <md-app-toolbar class="md-primary">    
            <div class="md-toolbar-row">    
                <div class="md-toolbar-section-start"></div>    
                <div class="flex md-title">消息</div>
                <div class="md-toolbar-section-end">    
                </div>    
            </div>    
        </md-app-toolbar>    
        <md-app-content>
            <md-scroll-load :loading="isLoading" @load="onLoad">
                <p v-for="i in items">{{i}}</p>
            </md-scroll-load>
        </md-app-content>    
        <md-app-bottom-bar>    
            <home-bottom-bar></home-bottom-bar>    
        </md-app-bottom-bar>    
    </md-app>
</template>
<script>
import HomeBottomBar from "../../components/NavBar/HomeBottomBar";
export default {
  name: "Home",
  components: {
    HomeBottomBar
  },
  data: () => ({
    menuVisible: false,
    isLoading: false,
    items: 10
  }),
  methods: {
    onLoad() {
      setTimeout(() => {
        this.items += 10;
        console.log("onLoad");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.md-app {
  min-height: 100%;
  max-width: 100%;
  height: 100%;
}
</style>
