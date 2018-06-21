<template>
<app-rpt-view title="业务明细">
      <md-x-dropdowns v-if="configed">
        <md-x-dropdown :title="group?group:'阿米巴'">
          <md-picker :md-data="picker_groups" v-model="selector.groups" />
        </md-x-dropdown>
        <md-x-dropdown :title="period?period:'期间'">
          <md-picker :md-data="picker_periods" v-model="selector.periods" />
        </md-x-dropdown>
      </md-x-dropdowns>
      <md-layout class="flex" md-column>
        <md-pull-refresh @refresh="onListRefresh">
          <md-scroll-load :md-finished="isListFinished" :immediate-check="false" @load="onListScrollLoad">
            <md-x-panel v-for="item in listItems" :key="item.id" :title="item.doc_no" :status="item.use_type_enum" class="item-detail">
              <md-x-cell title="要素" :value="item.element_name" />
              <md-x-cell title="对方巴" :value="item.to_group_name" />
            </md-x-panel>
          </md-scroll-load>
        </md-pull-refresh>
      </md-layout>
</app-rpt-view>
</template>
<script>
import AppRptView from "../../components/RptView/RptView";
import extend from "lodash/extend";
import debounce from "gmf/core/utils/MdDebounce";
import { mapState, mapGetters } from "vuex";

export default {
  name: "RptBizTotal",
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
    selector: {
      groups: [],
      periods: []
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
    ...mapState("amiba", ["purpose", "periods", "groups"]),
    ...mapGetters("amiba", ["currentPeriod"]),
    picker_periods() {
      return this.periods && this.periods.length > 0
        ? [
            this.periods.map(r => {
              r.value = r.id;
              return r;
            })
          ]
        : [];
    },
    picker_groups() {
      return this.groups && this.groups.length > 0
        ? [
            this.groups.map(r => {
              r.value = r.id;
              return r;
            })
          ]
        : [];
    },
    group() {
      if (this.selector.groups.length && this.selector.groups[0]) {
        return this.groups.find(r => r.id === this.selector.groups[0]);
      }
      return null;
    },
    period() {
      if (this.selector.periods.length && this.selector.periods[0]) {
        return this.periods.find(r => r.id === this.selector.periods[0]);
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
    period(n, o) {
      if (n && this.configed && ((o && n.id != o.id) || !o)) {
        this.fetchListData();
      }
    }
  },
  methods: {
    async config() {
      const purposes = await this.$store.dispatch("amiba/getPurposes");
      if (!this.purpose && purposes && purposes.length > 0) {
        await this.$store.dispatch("amiba/setPurpose", purposes[0]);
      }
      await this.$store.dispatch("amiba/getPeriods");
      await this.$store.dispatch("amiba/getGroups");
      if (this.currentPeriod) {
        this.selector.periods = [this.currentPeriod.id];
      }
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
    fetchListData: debounce(function(pager, c) {
      if (!this.configed || !this.purpose || !this.group || !this.period) {
        c && c();
        return;
      }
      var options = extend(
        {
          purpose_id: this.purpose.id,
          group: this.group.code,
          period: this.period.code
        },
        {
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
.item-detail {
  margin-bottom: 10px;
}
</style>
