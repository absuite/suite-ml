<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-content>
      <md-x-search placeholder="输入您想要查找的内容" v-model="search_q" @search="onSearch" />
      <md-x-cell-group>
        <md-x-cell v-for="item in items" :key="item.id">
          <template slot="icon">
            <md-avatar>
              <img :src="item.avatar">
            </md-avatar>
          </template>
          <template slot="title">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </template>
          <template slot="extra">
            <md-button class="md-icon-button">
              <md-icon class="md-primary">star</md-icon>
            </md-button>
          </template>
        </md-x-cell>
      </md-x-cell-group>
    </md-app-content>
    <md-app-bottom-bar>
      <home-bottom-bar></home-bottom-bar>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import HomeBottomBar from "../../components/BottomBar/HomeBottomBar";
  export default {
    name: "Home",
    components: {
      HomeBottomBar
    },
    data: () => ({
      items: [],
      loading: false
    }),
    methods: {
      onClick(item) {
        //this.$tip('test');
        // this.$tip.loading({ mask: true, message:  item.title });
        // this.$tip.loading({ mask: true, message:  item.title });
        this.$tip.success('成功文案');
        this.$tip.fail('失败文案');
      },
      onLoad() {
        setTimeout(() => {
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/1.jpg",
            "title": "Ali Connors",
            "text": "If you pass a href attribute, the item will automatically render an a tag."
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/2.jpg",
            "title": "me, Scott, Jennifer",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/3.jpg",
            "title": "Sandra Adams",
            "text": "List items will render different tags based on the interaction types given."
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/4.jpg",
            "title": "Trevor Hansen",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/5.jpg",
            "title": "aliconnors@example.com",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/6.jpg",
            "title": "ali_connors@example.com",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/7.jpg",
            "title": "ali_connors@example.com",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/8.jpg",
            "title": "ali_connors@example.com",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/9.jpg",
            "title": "ali_connors@example.com",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/10.jpg",
            "title": "ali_connors@example.com",
            "text": "I'll be in your neighborhood"
          });
          this.items.push({
            "avatar": "/assets/vendor/gmf-sys/avatar/11.jpg",
            "title": "ali_connors@example.com",
            "text": "I'll be in your neighborhood"
          });
        }, 500);
      }
    },
    mounted() {
      this.onLoad();
    }
  };

</script>
<style lang="scss" scoped>
  .md-app {
    min-height: 100%;
    max-width: 100%;
    height: 100%;
  }

</style>
