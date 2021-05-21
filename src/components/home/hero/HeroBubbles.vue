<template>
  <div class="bubbles-container" ref="bubblesContainer">
    <div class="bubbles-container__restrainer">
      <hero-bubble v-for="n in 3" :key="n" ref="bubble" class="bubble" :size="(50 * (n+3)).toString()" />
    </div>
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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &__restrainer {
      position: relative;
      margin: auto;
      width: 100%;
      max-width: 900px;
      display: flex;
      grid-gap: 10px;
      gap: 10px;
      // flex-direction: reverse;
      flex-wrap: wrap;
      @for $i from 1 through 3 {
        .bubble {
          width: 100%;
          max-width: 400px;
          &:nth-child(#{$i}) {
            $displaceY: random($limit: 100);
            $displaceX: random($limit: 100);
            transform: translate(#{$displaceY}+'%', #{$displaceX}+'%');
            animation: float 6s ease-in-out infinite #{$i} + 's' alternate forwards;
            @keyframes float {
              to {
                transform: translate(#{$displaceX}+'%', #{$displaceY}+'%');
              }
            }
          }
        }
      }
    }
  }
</style>
