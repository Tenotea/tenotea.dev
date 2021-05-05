<template>
  <div>
    <div id="bubble" :size="size" :style="{'--size': size+'px' }">

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    size: {
      type: String,
      default: '23'
    }
  }
})
</script>


<style lang="scss" scoped>
  @use '/src/styles/variables.scss' as globals;
  #bubble {
    width: var(--size);
    height: var(--size);
    background: linear-gradient(45deg, rgba(globals.$primaryDark, 0), rgba(globals.$secondaryDark, 0.7));
    clip-path: circle();
  }
</style>
