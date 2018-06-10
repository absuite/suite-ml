<template>
  <div id="gmfApp" class="container" :class="containerClass">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <md-toast ref="rootToast"></md-toast>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'App',
    components: {},
    data: () => ({
      loading: false,
      message: false
    }),
    computed: {
      ...mapState({
        isSplash: 'splashPage'
      }),
      containerClass() {
        return {
          splash: this.isSplash
        }
      }
    },
    methods: {
      closeMessage() {
        this.message = false
      },
      beforeRouteRender(to, from, next) {
        this.loading = true
        next()
      },
      afterRouteRender() {
        this.loading = false
      }
    },
    created() {
      this.$router.beforeEach(this.beforeRouteRender)
      this.$router.afterEach(this.afterRouteRender)
    },
    mounted() {

    }
  }

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
