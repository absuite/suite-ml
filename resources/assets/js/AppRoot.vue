<template>
  <div id="gmfApp" class="container" :class="containerClass">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "App",
    components: {},
    data: () => ({
      loading: false,
      message: false
    }),
    computed: {
      ...mapState({
        isSplash: "splashPage"
      }),
      containerClass() {
        return {
          splash: this.isSplash
        };
      }
    },
    methods: {
      closeMessage() {
        this.message = false;
      },
      beforeRouteRender(to, from, next) {
        this.loading = true;
        next();
      },
      afterRouteRender(to) {
        this.loading = false;
        if (to && to.meta && to.meta.title) {
          window.setTitle(to.meta.title);
        }
      },
      configWx() {
        if (!window.wx) return;
        const url = window.location.href.split('#')[0];
        this.$http.get('/wx/js-sign-package', {
          params: {
            url: url
          }
        }).then(response => {
          const config = response.data.data;
          window.wx.config({
            debug: false,
            appId: config.appId,
            timestamp: config.timestamp,
            nonceStr: config.nonceStr,
            signature: config.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideOptionMenu'] // 必填，需要使用的JS接口列表
          });
        });
        window.wx.ready(function () {
          window.wx.hideOptionMenu();
        });
      }
    },
    created() {
      this.$router.beforeEach(this.beforeRouteRender);
      this.$router.afterEach(this.afterRouteRender);
      this.$route && this.$route.meta && this.$route.meta.title && window.setTitle(this.$route.meta.title);
      if (this.$root.configs && this.$root.configs.ent) {
        this.$store.dispatch("amiba/setEnt", this.$root.configs.ent);
      }
      this.configWx();
    },
    mounted() {}
  };

</script>
<style lang="scss">
  @import "~gmf/components/MdLayout/mixins";
  @import "./themes/default";
  body {
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }

  @include md-layout-small {
    body {
      moz-user-select: -moz-none;
      -moz-user-select: none;
      -o-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  #gmfApp {
    max-height: 100%;
    min-height: 100%;
    height: 100%;
    width: 100%;
    .logo {
      min-width: auto;
      padding-top: 4px;
      padding-bottom: 4px;
      .md-button-content {
        height: 100%;
      }
    }
  }

  .md-app-content {
    background-color: transparent !important;
    border: none !important;
    padding: 0px !important;
  }

  .md-app-toolbar {
    z-index: 4;
    .md-title {
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
  }

</style>
