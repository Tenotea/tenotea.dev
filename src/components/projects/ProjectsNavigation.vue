<template>
  <nav class="navigation">
    <ul class="nav-items">
      <router-link v-for="item in navItems" :key="item.id" :to=" item.id > 1 ? `/projects?label=${item.query}` : '/projects'">
        <li :class="`nav-item ${label === item.query ? 'nav-item-active' : ''}`" :style="cssVars">
          {{ item.name }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { projectsRoutes } from '../../objects/ProjectsNavigation';

export default defineComponent({
  setup() {
    return {
      navItems: projectsRoutes 
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
        '--theme': projectsRoutes.find(el => el.query === this.label)?.theme || '#fffdf6cc'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as globals; 
.navigation {
  display: none;
  @media screen and #{globals.$breakpoint-sm} {
    display: block;
  }
  .nav-items {
    margin-left: auto;
    display: grid;
    max-width: max-content;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 15px;
    gap: 15px;
    list-style: none;
    .nav-item {
      cursor: pointer;
      color: lighten(globals.$titleGray, 15);
      transition: ease-out 200ms;
      transition-property: color, font-weight;
      font-weight: 400;
      &:hover {
        color: lighten(globals.$titleGray, 45);
      }
      &.nav-item-active {
        color: var(--theme);
        font-weight: 600;
        letter-spacing: 0.01em;
        padding: 0px 4px;
        padding-bottom: 4px;
        border-bottom: 2px solid var(--theme);
      }
    }
  }
}
</style>
