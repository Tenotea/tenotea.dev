<template>
  <div class="image-box" :class="{ collapsed: isCollapsed }">
    <div class="image-item" :style="backgroundImage">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { PortfolioProject } from '../../db/projects/projects';

export default defineComponent({
  setup () {
    const project = <PortfolioProject> inject('currentProject')
    return {
      project
    }
  },

  props: {
    isCollapsed: {
      type: Boolean
    }
  },

  computed: {
    backgroundImage ():any {
      return {
        '--image': `url(${this.project.primaryImage.url})`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.image-box {
  position: relative;
  width: max-content;
  border-radius: 10px;
  width: 100%;
  transform: rotate(0deg);
  &.collapsed {
    .image-item {
      height: 300px;
      &:hover {
        transform: scale(1.01);
      }
      @media screen and #{globals.$breakpoint-sm} {
        height: 400px;
      }
    }
  }
  .image-item {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    background-image: var(--image);
    background-color: globals.$primaryDark;
    max-width: 800px;
    width: 100%;
    z-index: 1;
    border-radius: inherit;
    transition: ease-in-out 300ms transform;
    min-height: 250px;
  }
  &::after {
    content: '';
    position: absolute;
    $offset: -20px;
    top: $offset;
    left: $offset;
    background-color: globals.$secondaryDark;
    opacity: 0.4;
    width: 100%;
    max-width: 800px;
    height: 100%;
    z-index: 0;
    border-radius: inherit;
    transition: ease-in-out 300ms;
    transition-property: top, left;
  }
  &:hover {
    &::after {
      $offset: -30px;
      top: $offset;
      left: $offset;
    }
  }
}
</style>
