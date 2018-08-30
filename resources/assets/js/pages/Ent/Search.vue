<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-x-search placeholder="输入您想要加入的企业" v-model="search_q" @search="onSearch">
      </md-x-search>
      <md-pull-refresh @refresh="onRefresh" class="flex">
        <md-scroll-load :md-finished="isFinished" @load="onScrollLoad">
          <md-x-cell-group>
            <md-x-cell :title="item.name" icon="location" :label="item.code" v-for="item in items" :key="item.id">
              <div slot="extra">
                <span v-if="item.is_joined">已加入</span>
                <md-x-button v-else size="small" @click="onItemClick(item)">申请加入</md-x-button>
              </div>
            </md-x-cell>
          </md-x-cell-group>
        </md-scroll-load>
      </md-pull-refresh>
      <div class="refresh-loading layout layout-align-center-center" v-if="sending">
        <md-x-loading/>
      </div>
    </md-app-content>
    <md-app-bottom-bar>
      <md-x-submit-bar @back="$router.back()" show-back button-text="" />
    </md-app-bottom-bar>
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
    sending: false,
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
          this.sending = true;
          this.$http
            .post("ents/join", {
              entId: item.id
            })
            .then(
              res => {
                if (res && res.data && res.data.data)
                  this.$tip("加入成功！等待企业审核");
                else this.$tip("已经加入过了!");
                item.is_joined = true;
                this.sending=false;
              },
              err => {
                this.$tip("加入失败！");
                this.sending=false;
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
      }
      this.$tip.waiting("加载中...");
      this.$http
        .get("sys/ents", {
          params: options
        })
        .then(
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
.refresh-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 300;
}
</style>
