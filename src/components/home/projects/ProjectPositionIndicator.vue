<template>
  <div class="position_indicator__container" :class="{ reverse }">
    <common-square-grid color="#493B39" />
    <h1 class="indicator__number" ref="indicatorNumber">
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
            x: this.reverse ? '100%' : '-120%',
            opacity: 0.3
          }, {
            x: '0%',
            opacity: 1,
            duration: 0.5
          })
        }
      })
    }).observe(indicatorNumber)
  }
})
</script>

<style lang="scss" scoped>
@use '../../../styles/variables.scss' as globals;
.position_indicator__container {
  position: relative;
  overflow: hidden;
  .indicator__number {
    @media screen and #{globals.$breakpoint-sm} {
      color: globals.$secondaryOrange;
    }
    font-size: 8em;
    color: #d7dbf5;
    margin-left: 10px;
    transform: translateX(90%);
    transition: 300ms ease-in-out color;
  }
}
</style>
