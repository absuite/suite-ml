<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content>
      <md-pull-refresh @refresh="onRefresh">
        <md-scroll-load :md-finished="isFinished" :configed="configed" @load="onScrollLoad">
          <md-x-cell-group>
            <md-x-cell icon="md:settings_input_svideo" is-link v-for="item in items" :key="item.id" @click="onItemClick(item)" 
            :title="item.name"
            :label="item.code"
            :tag="item.org?item.org.name:''"
            >
            </md-x-cell>
          </md-x-cell-group>
        </md-scroll-load>
      </md-pull-refresh>
    </md-app-content>
    <md-app-bottom-bar>    
      <md-x-submit-bar>       
        <md-button class="md-icon-button md-raised" slot="button" @click="onAddClick">
          <md-icon>add</md-icon>
        </md-button>      
      </md-x-submit-bar>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
import AppBackNav from "../../components/NavBar/BackNav";
import MdIconAdd from "gmf/components/MdIcon/Parts/MdIconAdd";
import EditDia from "./EditDia";
import extend from "lodash/extend";
import { mapState, mapGetters } from "vuex";
export default {
  name: "DeptList",
  components: {
    AppBackNav,
    MdIconAdd,
    EditDia
  },
  data: () => ({
    configed: false,
    items: [],
    pager: {},
    isFinished: false,
    currentEditData: null,
    search_q: ""
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
  methods: {
    async config() {
      this.configed = true;
    },
    onItemClick(item) {
      this.$go({ name: "cbo.dept.edit", query: { id: item.id } });
    },
    onAddClick() {
      this.$go({ name: "cbo.dept.edit" });
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
        this.items = [];
        this.isFinished = false;
      }
      this.$http("suite.cbo")
        .get("api/cbo/depts", {
          params: options
        })
        .then(
          res => {
            this.items = this.items.concat(res.data.data);
            this.pager = res.data.pager;
            this.isFinished = this.pager.items < this.pager.size;
            c && c();
          },
          err => {
            c && c();
            this.isFinished = true;
          }
        );
    }
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
