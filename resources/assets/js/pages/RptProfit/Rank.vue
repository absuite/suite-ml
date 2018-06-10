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
    <md-app-content class="layout-column">
      <md-layout>
        <md-vchart ref="topChart" :md-data="topChartData">
          <md-vbar />
          <md-vscale x field="name" />
          <md-vscale y field="this_profit" />
          <md-vtooltip :show-item-marker="false" />
        </md-vchart>
      </md-layout>
      <md-layout class="flex" md-column>
        <md-pull-refresh @refresh="onListRefresh">
          <md-scroll-load :md-finished="isListFinished" @load="onListScrollLoad">
            <md-table v-model="listItems">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="阿米巴巴">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="利润">{{ item.this_profit }}</md-table-cell>
                <md-table-cell md-label="利润率">{{ item.email }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-scroll-load>
        </md-pull-refresh>
      </md-layout>

    </md-app-content>
  </md-app>
</template>
<script>
import AppBackNav from "../../components/NavBar/BackNav";
import MdIconFilter from "gmf/components/MdIcon/Parts/MdIconFilter";
import extend from "lodash/extend";
export default {
  name: "RptProfitRank",
  components: {
    AppBackNav,
    MdIconFilter
  },
  data: () => ({
    topChartData: [],
    listItems: [],
    listPager: {},
    isListFinished: false,
    isShowFilling: false,
    search_q: ""
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchTopChart();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchTopChart(next);
  },
  methods: {
    onFilterClick() {
      this.isShowFilling = true;
    },
    onListRefresh(c) {
      this.fetchListData(null, c);
    },
    onListScrollLoad(c) {
      this.listPager.page++;
      this.fetchListData(this.listPager, c);
    },
    fetchTopChart(c) {
      const options = {
        size: 8
      };
      this.$http("suite.cbo")
        .post("api/amiba/reports/profit/rank", {
          params: options
        })
        .then(
          res => {
            this.topChartData = res.data.data;
            this.$nextTick(() => {
              this.$refs.topChart.rerender();
            });
            c && c();
          },
          err => {
            c && c();
          }
        );
    },
    fetchListData(pager, c) {
      var options = extend(
        {
          q: this.search_q
        },
        {
          size: 20
        },
        pager
      );
      if (!pager) {
        this.listItems = [];
        this.isListFinished = false;
      }
      this.$http("suite.cbo")
        .post("api/amiba/reports/profit/rank", {
          params: options
        })
        .then(
          res => {
            this.listItems = this.listItems.concat(res.data.data);
            this.listPager = res.data.pager;
            this.isListFinished = this.listPager.items < this.listPager.size;
            c && c();
          },
          err => {
            c && c();
          }
        );
    }
  },
  mounted() {}
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
