<template>
<app-rpt-view title="利润趋势">
      <md-x-dropdowns v-if="configed">
        <md-x-dropdown :title="group?group:'阿米巴'">
          <md-picker :md-data="picker_groups" v-model="selector.groups" />
        </md-x-dropdown>
        <md-x-dropdown :title="fm_period?fm_period:'开始期间'">
          <md-picker :md-data="picker_periods" v-model="selector.fm_periods" />
        </md-x-dropdown>
        <md-x-dropdown :title="to_period?to_period:'结束期间'">
          <md-picker :md-data="picker_periods" v-model="selector.to_periods" />
        </md-x-dropdown>
      </md-x-dropdowns>
      <md-layout>
        <md-x-chart ref="topChart" :md-data="topChartData">
          <md-x-scale x field="period_name" alias="期间" :tick-count="0" />
          <md-x-scale y field="this_profit" alias="利润" :tick-count="5" />
          <md-x-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth" />
          <md-x-line shape="smooth" />
        </md-x-chart>
      </md-layout>
      <md-layout class="flex" md-column>
        <md-pull-refresh @refresh="onListRefresh">
          <md-table v-model="listItems">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="期间">{{ item.period_name }}</md-table-cell>
              <md-table-cell md-label="利润">{{ item.this_profit }}</md-table-cell>
              <md-table-cell md-label="利润率">{{ item.this_profit_rate>0?Math.round(item.this_profit_rate * 100) / 100:'-' }}</md-table-cell>
            </md-table-row>
          </md-table>
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
    name: "RptProfitTrend",
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
      selector: {
        groups: [],
        fm_periods: [],
        to_periods: []
      }
    }),
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.config();
      });
    },
    computed: {
      ...mapState("amiba", ["purpose", "periods", "groups"]),
      ...mapGetters("amiba", ["currentPeriod"]),
      picker_periods() {
        return this.periods && this.periods.length > 0 ? [
          this.periods.map(r => {
            r.value = r.id;
            return r;
          })
        ] : [];
      },
      picker_groups() {
        return this.groups && this.groups.length > 0 ? [
          this.groups.map(r => {
            r.value = r.id;
            return r;
          })
        ] : [];
      },
      topChartData() {
        return this.listItems.filter((r, i) => {
          return i < 5 ? r : false;
        });
      },
      group() {
        if (this.selector.groups.length && this.selector.groups[0]) {
          return this.groups.find(r => r.id === this.selector.groups[0]);
        }
        return null;
      },
      fm_period() {
        if (this.selector.fm_periods.length && this.selector.fm_periods[0]) {
          return this.periods.find(r => r.id === this.selector.fm_periods[0]);
        }
        return null;
      },
      to_period() {
        if (this.selector.to_periods.length && this.selector.to_periods[0]) {
          return this.periods.find(r => r.id === this.selector.to_periods[0]);
        }
        return null;
      }
    },
    watch: {
      purpose(n, o) {
        if (n && this.configed && ((o && n.id != o.id) || !o)) {
          this.fetchListData();
        }
      },
      group(n, o) {
        if (n && this.configed && ((o && n.id != o.id) || !o)) {
          this.fetchListData();
        }
      },
      fm_period(n, o) {
        if (n && this.configed && ((o && n.id != o.id) || !o)) {
          this.fetchListData();
        }
      },
      to_period(n, o) {
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
        await this.$store.dispatch("amiba/getGroups");
        if (this.currentPeriod) {
          this.selector.to_periods = [this.currentPeriod.id];
        }
        this.configed = true;
        this.fetchListData();
      },

      onListRefresh(c) {
        this.fetchListData(null, c);
      },
      onPeriodChanged(index, tab) {
        this.period = tab;
      },
      fetchListData: debounce(function (pager, c) {
        if (!this.configed || !this.purpose || !this.group || !this.fm_period || !this.to_period) {
          c && c();
          return;
        }
        var options = extend({
            purpose_id: this.purpose.id,
            group: this.group.code,
            fm_period: this.fm_period.code,
            to_period: this.to_period.code
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.listItems = [];
        }
        this.$http("suite.cbo")
          .post("api/amiba/reports/profit/trend", options)
          .then(
            res => {
              this.listItems = this.listItems.concat(res.data.data);
              this.listPager = res.data.pager;
              c && c();
            },
            err => {
              c && c();
            }
          );
      }, 500)
    }
  };

</script>
<style lang="scss" scoped>
 
</style>
