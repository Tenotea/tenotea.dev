<template>
  <div class="image-insertion-box" :style="cssVars" @click="$emit('viewMaximized')">

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../../db/projects/projects';

export default defineComponent({
  emits: ['viewMaximized'],
  props: {
    src: {
      type: Object as PropType<ProjectImage>,
      required: true
    }
  },

  computed: {
    cssVars ():any {
      return {
        '--background': `url(${this.src.url})`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.image-insertion-box {
  cursor: zoom-in;
  // min-height: 300px;
  height: 300px;
  // height: 100vh;
  background-image: var(--background);
  background-color: globals.$secondaryDark;
  background-repeat: no-repeat;
  background-position: top center;
  // background-size: contain;
  background-size: 160% 100%;
  @media screen and (min-width: 1000px) {
    height: 500px;
    background-size: cover;
  }
}
</style>
