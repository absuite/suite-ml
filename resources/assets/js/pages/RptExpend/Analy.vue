<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-x-dropdowns v-if="configed">
        <filter-purpose-dropdown v-model="selector.purpose"></filter-purpose-dropdown>
        <filter-group-dropdown v-model="selector.group"></filter-group-dropdown>
        <filter-period-dropdown v-model="selector.period"></filter-period-dropdown>
      </md-x-dropdowns>
      <md-layout>
        <md-x-chart ref="topChart" :md-data="topChartData">
          <md-x-scale y field="value" />
          <md-x-scale x field="t" />
          <md-x-pie :radius="1" :inner-radius="0.7" series-field="element_name" />
          <md-x-legend position="bottom" />
          <md-x-guide type="text" :options="htmlOptions" />
        </md-x-chart>
      </md-layout>
      <div class="flex scroll">
        <md-pull-refresh @refresh="onListRefresh">
          <md-table v-model="listItems">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="项目">{{ item.element_name }}</md-table-cell>
              <md-table-cell md-label="利润" md-numeric>{{ item.value |mdThousand}}</md-table-cell>
              <md-table-cell md-label="利润率" md-numeric>{{ item.rate }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-pull-refresh>
      </div>
    </md-app-content>
  </md-app>
</template>
<script>
  import FilterPurposeDropdown from "../../components/Filter/PurposeDropdown";
  import FilterGroupDropdown from "../../components/Filter/GroupDropdown";
  import FilterPeriodDropdown from "../../components/Filter/PeriodDropdown";
  import extend from "lodash/extend";
  import debounce from "gmf/core/utils/MdDebounce";
  import mdThousand from 'gmf/filters/mdThousand';
  import {
    mapState,
    mapGetters
  } from "vuex";

  export default {
    name: "RptExpendAnaly",
    components: {
      FilterPurposeDropdown,
      FilterGroupDropdown,
      FilterPeriodDropdown
    },
    data: () => ({
      configed: false,
      listItems: [],
      listPager: {},
      selector: {
        purpose: null,
        group: null,
        period: null,
      },
      htmlOptions: {
        position: ["50%", "50%"],
        content: "3444",
        style: {
          fontSize: 24
        }
      },
      legendOptions: {
        position: "bottom",
        align: "center",
        itemFormatter(val) {
          return val;
        }
      },
      yOptions: {
        formatter(val) {
          return val * 100 + "%";
        }
      }
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
    filters: {
      mdThousand: mdThousand
    },
    computed: {
      ...mapGetters("amiba", ["currentPeriod", "purpose"]),
      filterKey() {
        var k = '1';
        if (this.selector.purpose) k += this.selector.purpose.id;
        if (this.selector.group) k += this.selector.group.id;
        if (this.selector.period) k += this.selector.period.id;
        return k;
      },
      topChartData() {
        return this.listItems
          .map(r => {
            r.t = "1";
            return r;
          })
          .filter((r, i) => {
            return i < 10 ? r : false;
          });
      },
    },
    watch: {
      filterKey(n) {
        if (this.configed) {
          this.fetchData();
        }
      },
      topChartData() {
        this.$refs.topChart.rerender();
      }
    },
    methods: {
      async config() {
        const purposes = await this.$store.dispatch("amiba/getPurposes");
        if (!this.purpose && purposes && purposes.length > 0) {
          await this.$store.dispatch("amiba/setPurpose", purposes[0]);
        }
        this.selector.period = this.currentPeriod;
        this.configed = true;
      },
      onListRefresh(c) {
        this.fetchData(null, c);
      },
      fetchData: debounce(function (pager, c) {
        if (!this.configed ||
          !this.selector.purpose ||
          !this.selector.group ||
          !this.selector.period
        ) {
          c && c();
          return;
        }
        var options = extend({
            purpose_id: this.selector.purpose.id,
            group: this.selector.group.code,
            period: this.selector.period.code
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.listItems = [];
        }
        this.$http("suite.cbo")
          .post("api/amiba/reports/expend/analy", options)
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
  .md-app {
    min-height: 100%;
    max-width: 100%;
    height: 100%;
  }

  .md-app-bottom-bar {
    height: 50px;
  }

</style>
