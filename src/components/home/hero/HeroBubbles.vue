<template>
  <div class="bubbles-container" ref="bubblesContainer">
    <hero-bubble v-for="n in 3" :key="n" ref="bubble" class="bubble" :size="(100 * n).toString()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tilt from 'vanilla-tilt'
import HeroBubble from './HeroBubble.vue'

export default defineComponent({
  components: { HeroBubble },
  setup() {
    
  },
  mounted () {
    const bubblesContainer = <HTMLDivElement> this.$refs['bubblesContainer']
    tilt.init(bubblesContainer, {
      "full-page-listening": true,
      perspective: 1500
    })
  }
})
</script>

<style scoped lang="scss">
  .bubbles-container {
    position: absolute;
    // background: #000;
    // display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    @for $i from 1 through 5 {
      .bubble {
        &:nth-child(#{$i}) {
          $displaceY: random($limit: 100);
          $displaceX: random($limit: 100);
          transform: translate(#{$displaceY}+'%', #{$displaceX}+'%');
          // transform: translate(#{(100 / 2)}+'%', 0px);
        }
      }
    }
  }
</style>
