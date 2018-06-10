<template>
  <md-icon-back @click="goBack"></md-icon-back>
</template>
<script>
import MdIconBack from 'gmf/components/MdIcon/Parts/MdIconBack';

export default {
  name: 'AppBackButtom',
  components: {
    MdIconBack
  },
  props: {
    title: String
  },
  methods:{
    goBack() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss">

</style>

