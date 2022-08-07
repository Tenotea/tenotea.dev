<template>
  <div class="position_indicator__container" :class="{ reverse }">
    <common-square-grid :color="color" />
    <h1 class="indicator__number" ref="indicatorNumber" :style="{color: color}">
      <slot />
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap, { } from 'gsap/all'
import CommonSquareGrid from '../../common/CommonSquareGrid.vue'

export default defineComponent({
  components: { CommonSquareGrid },
  props: {
    color: {
      type: String
    },
    reverse: {
      type: Boolean
    }
  },
  mounted () {
    const indicatorNumber = <HTMLDivElement> this.$refs.indicatorNumber
    new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(indicatorNumber, {
            x: this.reverse ? '100%' : '-100%',
            opacity: 0.3
          }, {
            x: '0%',
            opacity: 1,
            duration: 1.2
          })
        }
      })
    }, {
      threshold: 0
    }).observe(indicatorNumber)
  }
})
</script>

<style lang="scss" scoped>
@use '../../../styles/variables.scss' as globals;
.position_indicator__container {
  position: relative;
  overflow: hidden;
    top: -100px;
  @media screen and #{globals.$breakpoint-md} {
    top: 0;
  }
  .indicator__number {
    @media screen and #{globals.$breakpoint-md} {
      font-size: 8em;
      color: globals.$secondaryOrange;
    }
    font-size: 4em;
    // text-shadow: 2px 2px 5px #000000;
    color: #d7dbf5;
    margin-left: 10px;
    transform: translateX(90%);
    transition: 300ms ease-in-out color;
  }
}
</style>
