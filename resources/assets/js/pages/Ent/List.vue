<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <app-back-nav></app-back-nav>
        </div>
        <div class="flex md-title">我加入的企业</div>
        <div class="md-toolbar-section-end"></div>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-pull-refresh @refresh="onRefresh">
        <md-scroll-load :md-finished="isFinished" @load="onScrollLoad">
          <md-x-cell-group>
            <md-x-cell :title="item.name" icon="location" :label="item.code" v-for="item in items" :key="item.id">
              <md-x-button slot="extra" size="small">设为默认</md-x-button>
              <md-x-icon v-if="ent&&item.id==ent.id" slot="right-icon" name="certificate" />
            </md-x-cell>
          </md-x-cell-group>
        </md-scroll-load>
      </md-pull-refresh>
    </md-app-content>
    <md-app-bottom-bar class="md-elevation-1">
      <md-x-button class="md-full" to="/m/ent/search" icon="add-o">加入企业</md-x-button>
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
    isEditing: false,
    isFinished: false,
    currentEditData: null,
    search_q: ""
  }),
  computed:{
    ent(){
      return this.$root.configs.ent;
    }
  },
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
    fetchData(pager, c) {
      var options = extend({ q: this.search_q }, { size: 20 }, pager);
      if (!pager) {
        this.items = [];
        this.isFinished = false;
      }
      this.$http.get("sys/ents/my", { params: options }).then(
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
