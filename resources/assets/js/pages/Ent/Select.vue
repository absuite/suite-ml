<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content class="layout-column">
      <md-subheader>我的账号加入了
        <span>{{pager.total||0}}</span>个团队/企业</md-subheader>
      <md-pull-refresh @refresh="onRefresh" class="flex">
        <md-scroll-load :md-finished="isFinished" @load="onScrollLoad">
          <md-x-cell-group>
            <md-x-cell :title="item.name" icon="location" :label="item.code" v-for="item in items" :key="item.id">
              <span slot="extra">
                <md-x-button size="small" v-if="ent.id==item.id" disabled>当前企业</md-x-button>
                <md-x-button v-else size="small" @click="onItemClick(item)">设为当前企业</md-x-button>
              </span>
            </md-x-cell>
          </md-x-cell-group>
        </md-scroll-load>
      </md-pull-refresh>
    </md-app-content>
    <md-app-bottom-bar>
      <md-x-submit-bar @submit="$go('/m/ent/search')" @back="$router.back()" show-back button-text="加入企业" />
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import AppBackNav from "../../components/NavBar/BackNav";
  import MdIconAdd from "gmf/components/MdIcon/Parts/MdIconAdd";
  import extend from "lodash/extend";
  export default {
    name: "EntSelect",
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
    computed: {
      ent() {
        return this.$root.configs.ent || {};
      }
    },
    methods: {
      onItemClick(item) {
        this.$http.post("sys/auth/entry-ent/" + item.id).then(
          res => {
            this.$setConfigs({
              ent: res.data.data
            });
            this.$http.config({
              ent: res.data.data
            }, true);
            this.$store.dispatch("amiba/setEnt", res.data.data);
            this.$store.dispatch("amiba/config", true).then(
              res => {
                this.$tip("切换成功！");
              },
              err => {
                this.$tip(err);
              }
            );
          },
          err => {
            this.$tip("设置失败！");
          }
        );
      },
      onRefresh(c) {
        this.fetchData(null, c);
      },
      onScrollLoad(c) {
        this.pager.page++;
        this.fetchData(this.pager, c);
      },
      fetchData(pager, c) {
        var options = extend({
          q: this.search_q
        }, {
          size: 20
        }, pager);
        if (!pager) {
          this.items = [];
          this.isFinished = false;
        }
        this.$http.get("sys/ents/my", {
          params: options
        }).then(
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

  .md-app-bottom-bar {
    background: #fff;
  }

</style>
