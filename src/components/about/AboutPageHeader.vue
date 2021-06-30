<template>
  <div class="name_container">
    <h4 class="name_container__full-name">
      Adelakun Emmanuel
    </h4>
    <h1 class="name_container__last-name">
      Oluwatobiloba
    </h1>
    <p class="name_container__caption">
      Full-stack web engineer and student
    </p>
    <div class="name_container__social-media-links">
      <a v-for="platform in platforms" :key="platform.id" :href="platform.url">
        <app-icon :icon="platform.icon" :hover="platform.color" size="1.7" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SocialMedia, { socialMediaPlatforms } from '../app/SocialMedia.vue'
import AppIcon from '../common/AppIcon.vue';

export default defineComponent({
  components: { SocialMedia, AppIcon },
  setup() {
    return {
      platforms: socialMediaPlatforms
    }
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.name_container {
  text-align: center;
  max-width: max-content;
  margin: 3.5em auto;
  &__full-name {
    color: globals.$primaryOrange;
    font-weight: 500;
    font-size: 1.6em;
  }
  &__last-name {
    font-size: 2em;
    font-weight: 600;
    @media screen and #{globals.$breakpoint-sm} {
      font-size: 3.3em;
    }
  }
  &__caption {
    color: globals.$primaryGreen;
  }
  &__social-media-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: min-content;
    gap: 15px;
    grid-gap: 15px;
    margin: auto;
    margin-top: 20px;
  }
}
</style>
