<template>
  <div class="section_title">
    <common-square-grid
      size="6px"
      md-size="6px"
      md-gap="5px"
      md-left="-15px"
      left="-10px"
      top="0px"
      color="#5A4B3F"
    />
    <div class="section_title__title" >
      <div class="section_title__title--name" ref="sectionTitle">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap, { Power1 } from 'gsap'
import CommonSquareGrid from './CommonSquareGrid.vue'

export default defineComponent({
  components: { CommonSquareGrid },
  props: {
    animate: {
      type: Boolean
    }
  },
  mounted () {
    if (this.animate) {
      const titleElement = <HTMLDivElement> this.$refs.sectionTitle
      new IntersectionObserver((entries) => {
        entries.forEach(({isIntersecting}) => {
          gsap.fromTo(titleElement, {
            x: '-20%',
            opacity: 0
          }, {
            x: '0%',
            opacity: 1,
            duration: 0.7,
            ease: Power1.easeOut
          })
        })
      }).observe(titleElement)
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '../../styles/variables.scss' as globals; 
  .section_title {
    margin-left: 30px;
    position: relative;
    &__title {
      overflow: hidden;
      &--name {
        font-size: 3em;
        font-weight: 600;
        line-height: 1em;
        color: #828282;
        @media screen and #{globals.$breakpoint-md} {
          font-size: 4em;
        }
      }
    }
  }
</style>
