<template>
  <div>
    <div id="bubble" :size="size" :style="cssVars">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    size: {
      type: String,
      default: '23'
    },
    gradient: {
      type: String,
      default: 'linear-gradient(45deg, rgba(37, 39, 52, 0), rgba(51, 54, 70, 0.7))'
    }
  },

  computed: {
    cssVars ():any {
      return {
      '--size': this.size + 'px',
      '--gradient': this.gradient
      }
    }
  }
})
</script>


<style lang="scss" scoped>
  @use '/src/styles/variables.scss' as globals;
  #bubble {
    width: var(--size);
    height: var(--size);
    background: var(--gradient);
    clip-path: circle();
  }
</style>
