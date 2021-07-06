<template>
  <div class="image-insertion-box" :style="cssVars">

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../../db/projects/projects';

export default defineComponent({
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
.image-insertion-box {
  min-height: 500px;
  background-image: var(--background);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
}
</style>
