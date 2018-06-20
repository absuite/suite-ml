<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <app-back-nav></app-back-nav>
        </div>
        <div class="flex md-title">{{title}}</div>
        <div class="md-toolbar-section-end">
          <md-icon-filter @click="isShowFilling=true"></md-icon-filter>
        </div>
      </div>
    </md-app-toolbar>
    <md-app-content class="layout-column">
      <slot/>
      <md-x-popup v-model="isShowFilling" position="right" md-full>
        <md-x-nav-bar left-arrow @click-left="isShowFilling=false"></md-x-nav-bar>
        <md-x-cell-group>
          <md-x-cell title="核算目的" icon="md:account_balance" @click="isShowFillingPurpose=true" />
        </md-x-cell-group>
        <app-purpose-picker v-model="isShowFillingPurpose"></app-purpose-picker>
      </md-x-popup>
    </md-app-content>
  </md-app>
</template>
<script>
  import AppPurposePicker from "../PurposePicker/PurposePicker";
  import AppBackNav from "../NavBar/BackNav";
  import MdIconFilter from "gmf/components/MdIcon/Parts/MdIconFilter";
  import extend from "lodash/extend";
  import debounce from "gmf/core/utils/MdDebounce";
  import {
    mapState,
    mapGetters
  } from "vuex";

  export default {
    name: "RptView",
    components: {
      AppPurposePicker,
      AppBackNav,
      MdIconFilter
    },
    props: {
      title: Boolean
    },
    created() {
      console.log(this.$options.name);
    },
    data: () => ({
      configed: false,
      isShowFilling: false,
      isShowFillingPurpose:false
    }),
    computed: {
      ...mapState("amiba", ["purpose"]),
    },
    methods: {
      async config() {
        await this.$store.dispatch("amiba/config");
        const purposes = await this.$store.dispatch("amiba/getPurposes");
        if (!this.purpose && purposes && purposes.length > 0) {
          await this.$store.dispatch("amiba/setPurpose", purposes[0]);
        }
        this.configed = true;
      },
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
