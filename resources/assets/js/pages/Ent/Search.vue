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
              <span slot="extra">
                  <span v-if="item.is_joined">已加入</span>
                  <md-x-button v-else size="small" @click="onItemClick(item)">申请加入</md-x-button>
              </span>              
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
      this.$dialog
        .confirm("是否要加入企业")
        .then(() => {
          this.$http.post("sys/ents/join", { entId: item.id }).then(
            res => {
              if (res && res.data && res.data.data) this.$tip("加入成功！");
              else this.$tip("已经加入过了!");
              item.is_joined = true;
            },
            err => {
              this.$tip("加入失败！");
            }
          );
        })
        .catch(() => {});
    },
    onRefresh(c) {
      this.fetchData(null, c);
    },
    onScrollLoad(c) {
      this.pager.page++;
      this.fetchData(this.pager, c);
    },
    onSearch(s) {
      this.fetchData();
    },
    fetchData(pager, c) {
      if (!this.search_q) {
        this.items = [];
        c && c();
        this.isFinished = true;
        return;
      }
      var options = extend({ q: this.search_q }, { size: 20 }, pager);
      if (!pager) {
        this.items = [];
      }
      this.$tip.waiting("加载中...");
      this.$http.get("sys/ents", { params: options }).then(
        res => {
          this.items = this.items.concat(res.data.data);
          this.pager = res.data.pager;
          this.isFinished = this.pager.items < this.pager.size;
          c && c();
          this.$tip.clear();
        },
        err => {
          c && c();
          this.isFinished = true;
          this.$tip.clear();
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
