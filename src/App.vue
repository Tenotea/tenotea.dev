<template>
  <div id="main" :class="{ blur_out: navigation }" >
    <social-media> </social-media>
    <app-header @openNavigation="navigation = true"> </app-header>
    <router-view></router-view>
    <app-navigation v-if="navigation" @exitNavigation="navigation = false"> </app-navigation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/app/AppHeader.vue'
import AppNavigation from './components/app/AppNavigation.vue'
import SocialMedia from './components/app/SocialMedia.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    SocialMedia,
    AppNavigation
  },
  data: () => ({
    navigation: false
  })
})
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>
