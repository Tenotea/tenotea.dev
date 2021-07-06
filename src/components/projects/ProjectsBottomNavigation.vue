<template>
  <div class="bottom-nav" :style="cssVars">
    <div class="bottom-nav--container">
      <router-link v-for="item in navRoutes" :key="item.id" :to=" item.id > 1 ? `/projects?label=${item.query}` : '/projects'">
        <div class="bottom-nav--item" :class="{ active: item.query === label }">
          <app-icon :icon="item.icon" :hover="item.theme" size="1.3" :class="{ active: item.query === label }" />
          <p class="bottom-nav--item__name" :class="{ active: item.query === label }">
            {{ item.name }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'
import { projectsRoutes } from '../../objects/ProjectsNavigation'

export default defineComponent({
  components: { AppIcon },
  setup() {
    return {
      navRoutes: projectsRoutes
    }
  },

  props: {
    label: {
      type: String,
      required: true
    }
  },

  computed: {
    cssVars ():any {
      return {
        '--theme': this.navRoutes.find(el => el.query === this.label)?.theme
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.bottom-nav {
  @media screen and #{globals.$breakpoint-sm} {
    display: none;
  }
  position: fixed;
  width: 100%;
  z-index: 100;
  background: globals.$primaryDark;
  box-shadow: 0px -3px 10px rgba(#000000, 0.2);
  bottom: 0;
  left: 0;
  &--container {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    max-width: max-content;
    margin: auto;
    grid-gap: 30px;
    padding: 5px 0px;
  }
  &--item {
    max-width: max-content;
    text-align: center;
    color: rgba(255, 255, 255, 0.508);
    cursor: pointer;
    &.active {
      color: var(--theme);
    }
    &__name {
      font-size: 0.7em;
      font-weight: 300;
      letter-spacing: 0.04em;
      color: rgba(255, 255, 255, 0.508);
      &.active {
        color: var(--theme);
      }
    }
  }
}
</style>
