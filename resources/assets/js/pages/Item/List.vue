<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <app-back-nav></app-back-nav>
        </div>
        <div class="flex md-title">物料列表</div>
        <div class="md-toolbar-section-end">
          <md-icon-add @click="onAddClick"></md-icon-add>
        </div>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-pull-refresh @refresh="onRefresh">
        <md-scroll-load :md-finished="isFinished" @load="onScrollLoad">
          <md-x-cell-group>
            <md-x-cell icon="md:settings_input_svideo" is-link v-for="item in items" :key="item.id" @click="onItemClick(item)">
              <template slot="title">
                <h3>{{item.name}}</h3>
                <md-x-tag v-if="item.category">{{item.category.name}}</md-x-tag>
                <p>{{item.code}}</p>
              </template>
            </md-x-cell>
          </md-x-cell-group>
        </md-scroll-load>
      </md-pull-refresh>
      <edit-dia :md-active.sync="isEditing" :md-data="currentEditData" @md-closed="editClosed"></edit-dia>
    </md-app-content>
  </md-app>
</template>
<script>
  import AppBackNav from "../../components/NavBar/BackNav";
  import MdIconAdd from "gmf/components/MdIcon/Parts/MdIconAdd";
  import EditDia from "./EditDia";
  import extend from "lodash/extend";
  export default {
    name: "ItemList",
    components: {
      AppBackNav,
      MdIconAdd,
      EditDia
    },
    data: () => ({
      items: [],
      pager: {},
      isEditing:false,
      isFinished: false,
      currentEditData:null,
      search_q: ""
    }),
    methods: {
      onItemClick(item) {
        this.currentEditData=item;
        this.isEditing=true;
      },
      onAddClick() {
        this.currentEditData=null;
        this.isEditing=true;
      },
      editClosed(data){
        if(data&&data.isCreated){
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
        var options = extend({
            q: this.search_q
          }, {
            size: 20
          },
          pager
        );
        if (!pager) {
          this.items = [];
          this.isFinished=false;
        }
        this.$http("suite.cbo")
          .get("api/cbo/items", {
            params: options
          })
          .then(
            res => {
              this.items = this.items.concat(res.data.data);
              this.pager = res.data.pager;
              this.isFinished=this.pager.items<this.pager.size;
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

</style>
