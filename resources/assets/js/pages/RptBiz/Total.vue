<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-x-dropdowns v-if="configed">
        <filter-purpose-dropdown v-model="selector.purpose"></filter-purpose-dropdown>
        <filter-group-dropdown v-model="selector.group"></filter-group-dropdown>
        <filter-period-dropdown v-model="selector.period" title="期间"></filter-period-dropdown>
      </md-x-dropdowns>
      <md-content class="flex scroll">
        <md-pull-refresh @refresh="onListRefresh">
          <md-scroll-load :md-finished="isListFinished" :immediate-check="false" @load="onListScrollLoad">
            <md-x-panel v-for="item in listItems" :key="item.id" :title="item.doc_no" :status="item.use_type_enum" class="item-detail">
              <md-x-cell title="要素" :value="item.element_name" />
              <md-x-cell title="对方巴" :value="item.to_group_name" />
            </md-x-panel>
          </md-scroll-load>
        </md-pull-refresh>
      </md-content>
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
    name: "RptBizTotal",
    components: {
      FilterPurposeDropdown,
      FilterGroupDropdown,
      FilterPeriodDropdown
    },
    created() {
      console.log(this.$options.name);
    },
    data: () => ({
      configed: false,
      listItems: [],
      listPager: {},
      isListFinished: false,
      selector: {
        purpose: null,
        group: null,
        period: null
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
    computed: {
      ...mapGetters("amiba", ["currentPeriod", "purpose"]),
      filterKey() {
        var k = '1';
        if (this.selector.purpose) k += this.selector.purpose.id;
        if (this.selector.group) k += this.selector.group.id;
        if (this.selector.period) k += this.selector.period.id;
        return k;
      }
    },
    watch: {
      filterKey(n) {
        if (this.configed) {
          this.fetchListData();
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
        this.fetchListData(null, c);
      },
      onListScrollLoad(c) {
        this.listPager.page++;
        this.fetchListData(this.listPager, c);
      },
      fetchListData: debounce(function (pager, c) {
        if (!this.configed ||
          !this.selector.purpose ||
          !this.selector.period ||
          !this.selector.group
        ) {
          this.isListFinished = true;
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
          .post("api/amiba/reports/biz/total", options)
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
