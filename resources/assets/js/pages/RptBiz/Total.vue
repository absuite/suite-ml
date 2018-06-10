<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <app-back-nav></app-back-nav>
        </div>
        <div class="flex md-title">业务数据</div>
        <div class="md-toolbar-section-end">
          <md-icon-filter @click="onFilterClick"></md-icon-filter>
        </div>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-pull-refresh @refresh="onRefresh">
        <md-scroll-load :md-finished="isFinished" @load="onScrollLoad">
          <md-table v-model="items">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="物料">{{ item.code }}</md-table-cell>
              <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
              <md-table-cell md-label="Gender">{{ item.gender }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-scroll-load>
      </md-pull-refresh>
    </md-app-content>
  </md-app>
</template>
<script>
  import AppBackNav from "../../components/NavBar/BackNav";
  import MdIconFilter from "gmf/components/MdIcon/Parts/MdIconFilter";
  import extend from "lodash/extend";
  export default {
    name: "RptBizTotal",
    components: {
      AppBackNav,
      MdIconFilter
    },
    data: () => ({
      items: [],
      pager: {},
      isFinished: false,
      isShowFilling: false,
      search_q: ""
    }),
    methods: {
      onFilterClick() {
        this.isShowFilling = true;
      },
      editClosed(data) {
        if (data && data.isCreated) {
          this.items.splice(0, 0, data);
        }
      },
      onRefresh(c) {
        this.fetchData(null, c);
      },
      onScrollLoad(c) {
        this.pager.page++;
        this.fetchData(this.pager, c);
      },
      fetchData(pager, c) {
        var options = extend({
            q: this.search_q
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.items = [];
          this.isFinished=false;
        }
        this.$http("suite.cbo")
          .get("api/amiba/reports/biz-total", {
            params: options
          })
          .then(
            res => {
              this.items = this.items.concat(res.data.data);
              this.pager = res.data.pager;
              this.isFinished=this.pager.items<this.pager.size;
              c && c();
            },
            err => {
              c && c();
            }
          );
      }
    },
    mounted() {

    }
  };

</script>
<style lang="scss" scoped>
  .md-app {
    min-height: 100%;
    max-width: 100%;
    height: 100%;
  }

  .md-avatar .md-icon {
    font-size: 36px;
  }

</style>
