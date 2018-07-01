<template>
  <md-x-dropdown :title="playValue?playValue:title">
    <md-picker :md-data="picker_datas" v-model="picker_value" />
  </md-x-dropdown>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "FilterPeriodDropdown",
    props: {
      title: {
        type: String,
        default: '期间'
      },
      mdData: Array,
      value: Object
    },
    data: () => ({
      configed: false,
      picker_value: []
    }),
    computed: {
      ...mapState("amiba", ["periods"]),
      ...mapGetters("amiba", ["currentPeriod"]),
      picker_datas() {
        if (this.mdData && this.mdData.length) {
          return [this.mdData.map(r => {
            r.value = r.id;
            return r;
          })];
        } else if (this.periods && this.periods.length) {
          return [this.periods.map(r => {
            r.value = r.id;
            return r;
          })];
        } else {
          return [];
        }
      },
      playValue() {
        return this.value;
      }
    },
    watch: {
      picker_value(v) {
        var val = null;
        if (v && v.length > 0) {
          val = this.picker_datas && this.picker_datas[0].find(function (r) {
            return r.id == v[0];
          });
        }
        this.$emit('input', val);
      },
      value(v) {
        this.picker_value = v && v.id ? [v.id] : [];
      }
    },
    methods: {

    }
  };

</script>
