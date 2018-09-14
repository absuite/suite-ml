<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-x-dropdowns v-if="configed">
        <filter-purpose-dropdown v-model="selector.purpose"></filter-purpose-dropdown>
        <filter-group-dropdown v-model="selector.group"></filter-group-dropdown>
        <filter-period-dropdown v-model="selector.period"></filter-period-dropdown>
      </md-x-dropdowns>
      <div class="flex scroll">
        <md-pull-refresh @refresh="onListRefresh">
          <md-table v-model="listItems" class="md-dense">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="收支项目">
                <span :class="['md-ellipsis','item-indent-'+item.indent]">{{ item.itemName }}</span>
              </md-table-cell>
              <md-table-cell md-label="当期" md-numeric>{{ item.month_value|mdThousand }}</md-table-cell>
              <md-table-cell md-label="年累计" md-numeric>{{ item.year_value|mdThousand }}</md-table-cell>
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
    name: "RptIncomeAnaly",
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
    },
    watch: {
      filterKey(n) {
        if (this.configed) {
          this.fetchData();
        }
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
            group_id: this.selector.group.id,
            period_id: this.selector.period.id
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.listItems = [];
        }
        this.$http("suite.cbo")
          .post("api/amiba/reports/statement/ans", options)
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

  .item-indent-0 {
    padding-left: 0px;
    font-weight: bold;
    color: #1e2723;
    font-size: 15px;
  }

  .item-indent-1 {
    padding-left: 0px;
  }

  .item-indent-2 {
    padding-left: 10px;
  }

  .item-indent-3 {
    padding-left: 20px;
  }

  .item-indent-4 {
    padding-left: 30px;
  }

</style>
