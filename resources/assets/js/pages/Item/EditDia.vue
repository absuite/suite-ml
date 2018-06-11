<template>
  <md-dialog :md-active.sync="isActive" @md-opened="diaOpened" @md-closed="diaClosed">
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-icon-back @click="diaClosed()"></md-icon-back>
        </div>
        <div class="flex md-title md-text-center">物料编辑</div>
        <div class="md-toolbar-section-end">
          <md-button @click="postFormData" :disabled="$v.$invalid">保存</md-button>
        </div>
      </div>
    </md-toolbar>
    <md-dialog-content>
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
    </md-dialog-content>
  </md-dialog>
</template>
<script>
import MdIconBack from "gmf/components/MdIcon/Parts/MdIconBack";
import MdIconSave from "gmf/components/MdIcon/Parts/MdIconSave";
import extend from "lodash/extend";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "ItemEditDia",
  components: {
    MdIconBack,
    MdIconSave
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
  props: {
    mdData: Object,
    mdRequest: String,
    mdActive: Boolean
  },
  data: () => ({
    mainData: {},
    mdId: "",
    isActive: false,
    loading: false
  }),
  watch: {
    async mdActive(isActive) {
      this.isActive = isActive;
      await this.$nextTick();
      if (isActive) {
        this.diaOpened();
        this.$emit("md-opened");
      } else {
        this.diaClosed();
        var d = null;
        if (
          this.mainData &&
          this.mdData &&
          this.mainData.id == this.mdData.id
        ) {
          d = this.mainData;
        } else if (this.mainData && this.mainData.id) {
          d = this.mainData;
          d.isCreated = true;
        }
        this.$emit("md-closed", d);
      }
    }
  },
  methods: {
    diaOpened() {
      this.fetchData();
      this.$emit("update:mdActive", true);
    },
    diaClosed() {
      this.$emit("update:mdActive", false);
    },
    fetchData() {
      this.mainData = {};
      if (!this.mdData || !this.mdData.id) {
        return;
      }
      this.$tip.waiting("加载中...");
      this.$http("suite.cbo")
        .get("api/cbo/items/show", {
          params: {
            id: this.mdData.id
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
        .post("api/cbo/items", this.mainData)
        .then(
          res => {
            this.$tip.clear();
            this.mainData = res.data.data;
            this.diaClosed();
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

.md-content {
  padding: 16px;
}
</style>
