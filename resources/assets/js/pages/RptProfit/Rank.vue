<template>
<app-rpt-view title="利润排名">
      <md-x-tabs @click="onPeriodChanged">
        <md-x-tab v-for="item in periods" :title="item" :key="item.id"></md-x-tab>
      </md-x-tabs>
      <md-layout>
        <md-x-chart ref="topChart" :md-data="topChartData">
          <md-x-bar />
          <md-x-scale x field="group_name" alias="阿米巴" />
          <md-x-scale y field="this_profit" alias="利润" />
          <md-x-tooltip :show-item-marker="false" />
        </md-x-chart>
      </md-layout>
      <md-layout class="flex" md-column>
        <md-pull-refresh @refresh="onListRefresh">
          <md-scroll-load :md-finished="isListFinished" :immediate-check="false" @load="onListScrollLoad">
            <md-table v-model="listItems">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="阿米巴">{{ item.group_name }}</md-table-cell>
                <md-table-cell md-label="利润">{{ item.this_profit }}</md-table-cell>
                <md-table-cell md-label="利润率">{{ item.this_profit_rate>0?Math.round(item.this_profit_rate * 100) / 100:'-' }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-scroll-load>
        </md-pull-refresh>
      </md-layout>
</app-rpt-view>
</template>
<script>
import AppRptView from "../../components/NavBar/RptView";
  import extend from "lodash/extend";
  import debounce from "gmf/core/utils/MdDebounce";
  import {
    mapState,
    mapGetters
  } from "vuex";

  export default {
    name: "RptProfitRank",
    components: {
      AppRptView
    },
    created() {
      console.log(this.$options.name);
    },
    data: () => ({
      configed: false,
      listItems: [],
      listPager: {},
      isListFinished: false,
      period: null
    }),
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.config();
      });
    },
    computed: {
      ...mapState("amiba", ["purpose", "periods"]),
      ...mapGetters("amiba", ["currentPeriod"]),
      topChartData() {
        return this.listItems.filter((r, i) => {
          return i < 5 ? r : false;
        });
      }
    },
    watch: {
      purpose(n, o) {
        if (n && this.configed && ((o && n.id != o.id) || !o)) {
          this.fetchListData();
        }
      },
      period(n, o) {
        if (n && this.configed && ((o && n.id != o.id) || !o)) {
          this.fetchListData();
        }
      },
      topChartData() {
        this.$refs.topChart.rerender();
      }
    },
    methods: {
      async config() {
        await this.$store.dispatch("amiba/config");
        const purposes = await this.$store.dispatch("amiba/getPurposes");
        if (!this.purpose && purposes && purposes.length > 0) {
          await this.$store.dispatch("amiba/setPurpose", purposes[0]);
        }
        const periods = await this.$store.dispatch("amiba/getPeriods");
        this.period = this.currentPeriod;
        this.configed = true;
        this.fetchListData();
      },
      onListRefresh(c) {
        this.fetchListData(null, c);
      },
      onListScrollLoad(c) {
        this.listPager.page++;
        this.fetchListData(this.listPager, c);
      },
      onPeriodChanged(index, tab) {
        this.period = tab;
      },
      fetchListData: debounce(function (pager, c) {
        if (!this.configed || !this.purpose || !this.period) {
          c && c();
          this.isListFinished = true;
          return;
        }
        var options = extend({
            purpose_id: this.purpose.id,
            period: this.period.code
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.listItems = [];
          this.isListFinished = false;
        }
        this.$http("suite.cbo").post("api/amiba/reports/profit/rank", options)
          .then(
            res => {
              this.listItems = this.listItems.concat(res.data.data);
              this.listPager = res.data.pager;
              this.isListFinished = this.listPager.items < this.listPager.size;
              c && c();
            },
            err => {
              c && c();
              this.isListFinished = true;
            }
          );
      }, 500)
    }
  };

</script>
<style lang="scss" scoped>


</style>
