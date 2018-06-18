<template>
  <md-x-popup v-model="isShowFillingPurpose" position="bottom">
    <md-picker :md-data="[purposes]" @md-cancel="isShowFillingPurpose=false" @md-confirm="onConfirmPurpose" md-show-toolbar/>
  </md-x-popup>
</template>
<script>
  import {
    mapState,
    mapActions
  } from "vuex";
  export default {
    name: 'AppPurposePicker',
    components: {

    },
    props: {
      value: Boolean
    },
    data: () => ({
      isShowFillingPurpose: false
    }),
    computed: {
      ...mapState({
        purpose: state => state.amiba.purpose,
        purposes(state) {
          return state.amiba.purposes.map(r => {
            r.value = r.id;
            return r;
          })
        }
      })
    },
    watch: {
      value(val) {
        this.isShowFillingPurpose = val;
      },
      isShowFillingPurpose(val) {
        this.$emit('input', val);
      },
    },
    methods: {
      ...mapActions("amiba", ["setPurpose"]),
      onConfirmPurpose(data) {
        this.isShowFillingPurpose = false;
        if (data && data.length > 0) {
          const item = this.purposes.find(function (r) {
            return r.id == data[0];
          });
          this.setPurpose(item);
        }

      },
      onFilterClick() {
        this.isShowFilling = !this.isShowFilling;

      },
    },
    mounted() {
      this.$store.dispatch("amiba/getPurposes");
    }
  };

</script>
<style lang="scss" scoped>


</style>
