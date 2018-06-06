<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start"></div>
        <div class="flex md-title">消息</div>
        <div class="md-toolbar-section-end"> </div>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-list class="md-triple-line">
        <template v-for="item in items">
          <md-list-item>
            <md-avatar>
              <img :src="item.avatar">
            </md-avatar>
            <div class="md-list-item-text">
              <span>{{item.title}}</span>
              <p>{{item.text}}</p>
            </div>
            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">star</md-icon>
            </md-button>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
        </template>
      </md-list>
    </md-app-content>
    <md-app-bottom-bar>
      <home-bottom-bar></home-bottom-bar>
    </md-app-bottom-bar>
  </md-app>
</template>
<script>
  import HomeBottomBar from "../../components/NavBar/HomeBottomBar";
  export default {
    name: "Home",
    components: {
      HomeBottomBar
    },
    data: () => ({
      items: [],
      loading:false
    }),
    methods: {
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
    mounted(){
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
