<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content>
      <md-content class="layout-padding">
        <form novalidate @submit.prevent="validateForm">
          <md-field>
            <label>编码</label>
            <md-input v-model="mainData.code"></md-input>
          </md-field>
          <md-field>
            <label>名称</label>
            <md-input v-model="mainData.name"></md-input>
          </md-field>
        </form>
      </md-content>
    </md-app-content>
    <md-app-bottom-bar>    
      <md-x-submit-bar :disabled="$v.$invalid" @submit="postFormData"/>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
import extend from "lodash/extend";
import { mapState, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "DocTypeEdit",
  data: () => ({
    configed: false,
    mainData: {}
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
  mixins: [validationMixin],
  validations: {
    mainData: {
      code: {
        required
      },
      name: {
        required
      }
    }
  },
  methods: {
    async config(to) {
      this.configed = true;
      this.fetchData(to && to.query && to.query.id);
    },
    fetchData(id) {
      this.mainData = {};
      if (!id) {
        return;
      }
      this.$tip.waiting("加载中...");
      this.$http("suite.cbo")
        .get("api/cbo/doc-types/show", {
          params: {
            id: id
          }
        })
        .then(
          res => {
            this.mainData = res.data.data;
            this.$tip.clear();
          },
          err => {
            this.$tip("加载数据出错了！");
          }
        );
    },
    postFormData() {
      this.$tip.waiting("正在保存...");
      this.$http("suite.cbo")
        .post("api/cbo/doc-types", this.mainData)
        .then(
          res => {
            this.$tip.clear();
            this.mainData = res.data.data;
          },
          err => {
            this.$tip("保存出错了!");
          }
        );
    },
    validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.postFormData();
      }
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
</style>
