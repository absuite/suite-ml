<template>
  <md-button class="md-icon-button" @click="goBack">
    <md-icon>arrow_back</md-icon>
  </md-button>
</template>
<script>
  export default {
    name: 'AppArrowBack',

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
