<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-content class="flex">
        <md-pull-refresh @refresh="onRefresh">
          <md-scroll-load :md-finished="isFinished" :configed="configed" @load="onScrollLoad">
            <md-x-cell-group>
              <md-x-cell icon="md:settings_input_svideo" is-link v-for="item in items" :key="item.id" @click="onItemClick(item)" :title="item.name"
                :label="item.code" :tag="item.category?item.category.name:''">
              </md-x-cell>
            </md-x-cell-group>
          </md-scroll-load>
        </md-pull-refresh>
      </md-content>
    </md-app-content>
    <md-app-bottom-bar>
      <md-x-submit-bar @submit="onAddClick" @back="$router.back()" show-back speed="md:add" />
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import extend from "lodash/extend";
  import {
    mapState,
    mapGetters
  } from "vuex";
  export default {
    name: "ItemList",
    data: () => ({
      configed: false,
      items: [],
      pager: {},
      isFinished: false,
      search_q: ""
    }),
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.dispatch("amiba/config").then(
          () => vm.config(),
          err => {
            vm.$tip(err);
          }
        );
      });
    },
    methods: {
      async config() {
        this.configed = true;
      },
      onItemClick(item) {
        this.$go({
          name: "cbo.item.edit",
          query: {
            id: item.id
          }
        });
      },
      onAddClick() {
        this.$go({
          name: "cbo.item.edit"
        });
      },
      onRefresh(c) {
        this.fetchData(null, c);
      },
      onScrollLoad(c) {
        this.pager.page++;
        this.fetchData(this.pager, c);
      },
      fetchData(pager, c) {
        if (!this.configed) {
          c && c();
          return;
        }
        var options = extend({
            q: this.search_q
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.items = [];
          this.isFinished = false;
        }
        this.$http("suite.cbo")
          .get("api/cbo/items", {
            params: options
          })
          .then(
            res => {
              this.items = this.items.concat(res.data.data);
              this.pager = res.data.pager;
              this.isFinished = this.pager.items < this.pager.size;
              c && c();
            },
            err => {
              c && c();
              this.isFinished = true;
            }
          );
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
