<template>
    <router-link :to="'/projects/'+project.id">
      <div class="image-box">
        <div class="image-item" :style="backgroundImage">

        </div>
      </div> 
    </router-link>
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

  computed: {
    backgroundImage ():any {
      return {
        '--image': `url(${this.project.primaryImage})`
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
  .image-item {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top center;
    background-image: var(--image);
    background-color: globals.$primaryDark;
    max-width: 800px;
    height: 300px;
    @media screen and #{globals.$breakpoint-sm} {
      height: 400px;
    }
    width: 100%;
    z-index: 1;
    border-radius: inherit;
    transition: ease-in-out 200ms background-size;
    &:hover {
      background-size: 110%;
    }
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
