<template>
  <md-x-dropdown :title="playValue?playValue:title" :md-active.sync="isActive">
    <md-picker :md-data="picker_datas" md-show-toolbar md-toolbar-position="bottom" v-model="picker_value" @md-confirm="onConfirm"
      @md-cancel="isActive=false" />
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
      picker_value: [],
      isActive: false
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
        if (val && !this.value) {
          this.$emit('input', val);
        }
      },
      value(v) {
        this.picker_value = v && v.id ? [v.id] : [];
      }
    },
    methods: {
      onConfirm(v) {
        var val = null;
        if (v && v.length > 0) {
          val = this.picker_datas && this.picker_datas[0].find(function (r) {
            return r.id == v[0];
          });
        }
        this.$emit('input', val);
        this.isActive = false;
      }
    }
  };

</script>
