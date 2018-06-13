<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <app-back-nav></app-back-nav>
        </div>
        <div class="flex md-title">查找企业</div>
        <div class="md-toolbar-section-end"></div>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-x-search placeholder="输入您想要加入的企业"  show-action v-model="search_q" @search="onSearch">
      </md-x-search>
      <md-pull-refresh @refresh="onRefresh">
        <md-scroll-load :md-finished="isFinished" @load="onScrollLoad">
        <md-x-cell-group>
            <md-x-cell :title="item.name" icon="location" :label="item.code" v-for="item in items" :key="item.id">
              <md-x-button slot="extra" size="small">申请加入</md-x-button>
            </md-x-cell>
          </md-x-cell-group>
        </md-scroll-load>
      </md-pull-refresh>
    </md-app-content>
  </md-app>
</template>
<script>
import AppBackNav from "../../components/NavBar/BackNav";
import MdIconAdd from "gmf/components/MdIcon/Parts/MdIconAdd";
import extend from "lodash/extend";
export default {
  name: "EntList",
  components: {
    AppBackNav,
    MdIconAdd
  },
  data: () => ({
    items: [],
    pager: {},
    isEditing: false,
    isFinished: false,
    currentEditData: null,
    search_q: ""
  }),
  methods: {
    onItemClick(item) {
      this.currentEditData = item;
      this.isEditing = true;
    },
    onAddClick() {
      this.currentEditData = null;
      this.isEditing = true;
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
    onSearch(s){
      this.$tip('search');
    },
    fetchData(pager, c) {
      var options = extend({ q: this.search_q }, { size: 20 }, pager);
      if (!pager) {
        this.items = [];
        this.isFinished = false;
      }
      this.$http.get("sys/ents", { params: options }).then(
        res => {
          this.items = this.items.concat(res.data.data);
          this.pager = res.data.pager;
          this.isFinished = this.pager.items < this.pager.size;
          c && c();
        },
        err => {
          c && c();
          this.isFinished=true;
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
.md-app-bottom-bar {
  background: #fff;
}
</style>
