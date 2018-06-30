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
      <md-x-popup v-model="isShowFilling" position="bottom">
        <md-picker :md-data="purposes" v-model="currentPurpose" @md-cancel="isShowFilling=false" @md-confirm="onConfirmPurpose" md-show-toolbar/>
      </md-x-popup>
    </md-app-content>
  </md-app>
</template>
<script>
  import AppBackNav from "../NavBar/BackNav";
  import MdIconFilter from "gmf/components/MdIcon/Parts/MdIconFilter";
  import extend from "lodash/extend";
  import debounce from "gmf/core/utils/MdDebounce";
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "RptView",
    components: {
      AppBackNav,
      MdIconFilter
    },
    props: {
      title: String
    },
    data: () => ({
      configed: false,
      isShowFilling: false,
      currentPurpose: []
    }),
    computed: {
      ...mapState({
        purpose: state => state.amiba.purpose,
        purposes(state) {
          if (!state.amiba.purposes || !state.amiba.purposes.length) return [];
          return [state.amiba.purposes.map(r => {
            r.value = r.id;
            return r;
          })];
        }
      })

    },
    methods: {
      ...mapActions("amiba", ["setPurpose"]),
      async config() {
        await this.$store.dispatch("amiba/config");
        const purposes = await this.$store.dispatch("amiba/getPurposes");
        if (!this.purpose && purposes && purposes.length > 0) {
          await this.$store.dispatch("amiba/setPurpose", purposes[0]);
        }
        this.configed = true;
        if (this.purpose) {
          this.currentPurpose = [this.purpose.id];
        }

      },
      onConfirmPurpose(data) {
        this.isShowFilling = false;
        if (data && data.length > 0) {
          const item = this.purposes && this.purposes[0].find(function (r) {
            return r.id == data[0];
          });
          item && this.setPurpose(item);
        }

      },
    },
    created() {
      console.log(this.$options.name);
    },
    mounted() {
      this.config();
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
