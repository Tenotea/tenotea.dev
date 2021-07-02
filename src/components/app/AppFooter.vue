<template>
  <footer id="footer" :class="{ 'has-projects-in-view': $route.path.split('/').includes('projects')}">
    <div class="footer_container">
      <div class="footer_container__logo">
        <app-avatar />
      </div>
      <div class="footer_container__navigation">
        <router-link v-for="link in navLinks" :key="link.id" :to="link.path">
          <p class="footer_container__navigation--link">
            {{ link.name }}
          </p>
        </router-link>
      </div>
      <div class="footer_container__social_media">
        <div class="footer_container__social_media--links">
          <a v-for="platform in platforms" :key="platform.id" :href="platform.url">
            <app-icon :icon="platform.icon" :hover="platform.color" size="1.4" />
          </a>
        </div>
        <p class="copyright">
          &copy; copyright 2021. Tenotea.dev
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'
import { navigationLinks } from './AppNavigationAlt.vue'
import AppAvatar from './header/AppAvatar.vue'
import { socialMediaPlatforms } from './SocialMedia.vue'

export default defineComponent({
  components: { AppAvatar, AppIcon },
  data: () => ({
    navLinks: navigationLinks,
    platforms: socialMediaPlatforms
  })
})
</script>

<style lang="scss" scoped>
@import '../../styles/components/app/AppFooter.scss';
</style>
