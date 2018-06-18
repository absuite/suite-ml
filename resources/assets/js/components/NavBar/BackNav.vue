<template>
  <md-icon @click="goBack">keyboard_arrow_left</md-icon>
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
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  };

</script>
<style lang="scss" scoped>
  .md-icon {
    font-size: 30px;
  }

</style>
