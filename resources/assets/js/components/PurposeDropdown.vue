<template>
  <md-x-dropdown :title="purpose?purpose:'核算目的'">
    <md-picker :md-data="purposes" v-model="currentPurpose" />
  </md-x-dropdown>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "AppPurposeDropdown",
    data: () => ({
      configed: false,
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
    watch: {
      currentPurpose(v) {
        if (v && v.length > 0) {
          const item = this.purposes && this.purposes[0].find(function (r) {
            return r.id == v[0];
          });
          if (item) {
            this.$store.dispatch("amiba/setPurpose", item);
          }
        }
      }
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
    },
    mounted() {
      this.config();
    }
  };

</script>
