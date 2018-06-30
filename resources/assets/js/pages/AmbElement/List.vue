<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-x-dropdowns v-if="configed">
        <app-purpose-dropdown></app-purpose-dropdown>
      </md-x-dropdowns>
      <md-content class="flex scroll">
        <md-pull-refresh @refresh="onRefresh">
          <md-scroll-load :md-finished="isFinished" :configed="configed" @load="onScrollLoad">
            <md-x-cell-group>
              <md-x-cell icon="md:settings_input_svideo" is-link v-for="item in items" :key="item.id" :title="item.name" :label="item.code">
              </md-x-cell>
            </md-x-cell-group>
          </md-scroll-load>
        </md-pull-refresh>
      </md-content>
    </md-app-content>
    <md-app-bottom-bar>
      <md-x-submit-bar button-text="" @back="$router.back()" show-back/>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import extend from "lodash/extend";
  import AppPurposeDropdown from "../../components/PurposeDropdown";
  import {
    mapState,
    mapGetters
  } from "vuex";
  export default {
    name: "AmbElementList",
    components: {
      AppPurposeDropdown
    },
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
    computed: {
      ...mapState("amiba", ["purpose"]),
    },
    watch: {
      purpose(n, o) {
        if (n && this.configed && ((o && n.id != o.id) || !o)) {
          this.fetchData();
        }
      },
    },
    methods: {
      async config() {
        this.configed = true;
      },
      onItemClick(item) {},
      onRefresh(c) {
        this.fetchData(null, c);
      },
      onScrollLoad(c) {
        this.pager.page++;
        this.fetchData(this.pager, c);
      },
      fetchData(pager, c) {
        if (!this.configed || !this.purpose) {
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
          .get("api/amiba/elements", {
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
