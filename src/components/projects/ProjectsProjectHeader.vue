<template>
  <div class="project-header">
    <h1 class="project-header--title">
      Moviefetchers - Kdrama Website
    </h1>
    <a class="project-header--link" href="https://moviefetchers.cf" target="_blank" rel="noreferrer noopener">
      <app-icon icon="web" size="1.1" />
      <span class="project-link">
        https://moviefetchers.cf
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.project-header {
  &--title {
    font-size: 2.7em;
    max-width: 600px;
  }
  &--link {
    background: linear-gradient(45deg, globals.$secondaryOrange 30%, globals.$text-highlight-blue 70%);
    background-clip: text;
    color: transparent;
    background-size: 100% 100%;
    transition: 900ms ease-out background-size;
    &:hover {
      background-size: 200% 200%;
    }
    .project-link {
      color: inherit;
      font-weight: 500;
      font-family: 'Open Sans';
      font-size: 1.2em;
      letter-spacing: 0.02em;
      font-weight: 600;
    }
  }
}
</style>
