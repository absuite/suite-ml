<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-x-dropdowns v-if="configed">
        <filter-purpose-dropdown v-model="selector.purpose"></filter-purpose-dropdown>
        <filter-period-dropdown v-model="selector.period" title="期间"></filter-period-dropdown>
      </md-x-dropdowns>
      <div class="flex scroll">
        <md-pull-refresh @refresh="onListRefresh">
          <md-scroll-load :md-finished="isListFinished" :immediate-check="false" @load="onListScrollLoad">
            <md-table v-model="listItems">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="阿米巴">{{ item.group_name }}</md-table-cell>
                <md-table-cell md-label="收/支">
                  <div>收:{{ item.this_income }}</div>
                  <div>支:{{ item.this_cost }}</div>
                </md-table-cell>
                <md-table-cell md-label="利润">{{ item.this_profit }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-scroll-load>
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
  import {
    mapState,
    mapGetters
  } from "vuex";

  export default {
    name: "RptAchieveTotal",
    components: {
      FilterPurposeDropdown,
      FilterGroupDropdown,
      FilterPeriodDropdown
    },
    data: () => ({
      configed: false,
      listItems: [],
      listPager: {},
      isListFinished: false,
      selector: {
        purpose: null,
        period: null
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
    computed: {
      ...mapGetters("amiba", ["currentPeriod", "purpose"]),
      filterKey() {
        var k = '1';
        if (this.selector.purpose) k += this.selector.purpose.id;
        if (this.selector.period) k += this.selector.period.id;
        return k;
      }
    },
    watch: {
      filterKey(n) {
        if (this.configed) {
          this.fetchData();
        }
      },
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
      onListScrollLoad(c) {
        this.listPager.page++;
        this.fetchData(this.listPager, c);
      },
      fetchData: debounce(function (pager, c) {
        if (!this.configed ||
          !this.selector.purpose ||
          !this.selector.period
        ) {
          this.isListFinished = true;
          c && c();
          return;
        }
        var options = extend({
            purpose_id: this.selector.purpose.id,
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
          .post("api/amiba/reports/profit/total", options)
          .then(
            res => {
              this.listItems = this.listItems.concat(res.data.data);
              this.listPager = res.data.pager;
              this.isListFinished = this.listPager.items < this.listPager.size;
              c && c();
            },
            err => {
              this.isListFinished = true;
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
