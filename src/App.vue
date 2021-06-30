<template>
  <div id="main" :class="{ blur_out: navigation }">
    <social-media> </social-media>
    <app-header @openNavigation="handleMenu"> </app-header>
    <router-view class="content_wrap" v-slot="{ Component, route }">
      <app-page-transition v-if="routeHasChanged" @animation-complete="handleAnimationComplete" />
      <component :is="Component" :key="route.path" />
    </router-view>
    <app-navigation-alt v-if="hasPageLoaded" :active="navigation" @exitNavigation="navigation = false" />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppFooter from './components/app/AppFooter.vue'
import AppHeader from './components/app/AppHeader.vue'
import AppNavigationAlt from './components/app/AppNavigationAlt.vue'
import SocialMedia from './components/app/SocialMedia.vue'
import AppPageTransition from './components/app/AppPageTransition.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    SocialMedia,
    AppNavigationAlt,
    AppFooter,
    AppPageTransition
},
  data: () => ({
    navigation: false,
    hasPageLoaded: false,
    routeHasChanged: false
  }),

  methods: {
    handleMenu () {
      this.navigation = true
      this.hasPageLoaded = true
    },

    handleAnimationComplete () {
      this.routeHasChanged = false
    }
  },

  watch: {
    '$route' (newRoute, oldRoute) {
      this.routeHasChanged = true
    }
  }
})
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>
