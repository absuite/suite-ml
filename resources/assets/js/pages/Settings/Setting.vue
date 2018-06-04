<template>
    <md-app md-waterfall md-mode="fixed">    
        <md-app-toolbar class="md-primary">    
            <div class="md-toolbar-row">    
                <div class="md-toolbar-section-start">    
                </div>    
                <div class="flex  md-title">设置</div>    
                <div class="md-toolbar-section-end">    
                </div>    
            </div>    
        </md-app-toolbar>    
        <md-app-content> 
        </md-app-content>    
        <md-app-bottom-bar>    
            <home-bottom-bar></home-bottom-bar>    
        </md-app-bottom-bar>    
    </md-app>
</template>
<script>
    import HomeBottomBar from "../../components/NavBar/HomeBottomBar";    
    export default {    
        name: "Setting",
        components: {    
            HomeBottomBar
        },
        data: () => ({    
            menuVisible: false    
        })    
    };
</script>
<style lang="scss" scoped>
    .md-app {    
        min-height: 100%;    
        max-width: 100%;    
        height: 100%;  
    }
</style>
