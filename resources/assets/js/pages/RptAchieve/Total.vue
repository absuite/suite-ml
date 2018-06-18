<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <app-back-nav></app-back-nav>
        </div>
        <div class="flex md-title">经营业绩</div>
        <div class="md-toolbar-section-end">
          <md-icon-filter @click="isShowFilling=true"></md-icon-filter>
        </div>
      </div>
    </md-app-toolbar>
    <md-app-content class="layout-column">
      <md-x-tabs @click="onPeriodChanged">
        <md-x-tab v-for="item in periods" :title="item" :key="item.id"></md-x-tab>
      </md-x-tabs>
      <md-layout class="flex" md-column>
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
      </md-layout>
      <md-x-popup v-model="isShowFilling" position="right" md-full>
        <md-x-nav-bar left-arrow @click-left="isShowFilling=false"></md-x-nav-bar>
        <md-x-cell-group>
          <md-x-cell title="核算目的" icon="md:account_balance" @click="isShowFillingPurpose=true" />
        </md-x-cell-group>
        <app-purpose-picker v-model="isShowFillingPurpose"></app-purpose-picker>
      </md-x-popup>
    </md-app-content>
  </md-app>
</template>
<script>
  import AppPurposePicker from "../../components/PurposePicker/PurposePicker";
  import AppBackNav from "../../components/NavBar/BackNav";
  import MdIconFilter from "gmf/components/MdIcon/Parts/MdIconFilter";
  import extend from "lodash/extend";
  import debounce from "gmf/core/utils/MdDebounce";
  import {
    mapState,
    mapGetters
  } from "vuex";

  export default {
    name: "RptAchieveTotal",
    components: {
      AppPurposePicker,
      AppBackNav,
      MdIconFilter
    },
    created() {
      console.log(this.$options.name);
    },
    data: () => ({
      configed: false,
      listItems: [],
      listPager: {},
      isListFinished: false,
      isShowFillingPurpose: false,
      isShowFilling: false,
      period: null
    }),
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.config();
      });
    },
    computed: {
      ...mapState("amiba", ["purpose", "periods"]),
      ...mapGetters("amiba", ["currentPeriod"])
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
        if (!this.configed || !this.purpose || !this.group || !this.period) {
          c && c();
          return;
        }
        var options = extend({
            purpose_id: this.purpose.id,
            group: this.group.code,
            period: this.period.code
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

  .md-avatar .md-icon {
    font-size: 36px;
  }

</style>
