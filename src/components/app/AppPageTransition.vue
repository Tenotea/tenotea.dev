<template>
  <section class="curtains" :class="{ exit: toExitAnimation }" @transitionend="animationComplete">
    <div v-for="n in 5" :key="n" :class="`curtain position_${n}`" @animationend="a(n)"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['animation-complete'],
  
  data: () => ({
    toExitAnimation: false,
  }),

  created () {

  },

  methods: {
    a (n: number) {
      if (n === 5 ) {
        this.toExitAnimation = true
      }
    },
    animationComplete () {
      this.$emit('animation-complete')
    }
  }
})
</script>

<style lang="scss">
  .curtains {
    transition: 300ms ease-out;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: #191b29;
    .curtain {
      min-height: 100%;
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      opacity: 1;
      @keyframes shrink_width { 
        to {
          clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
          opacity: 0;
        }
      }
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          background: darken(#191b29, $i * 1.5);
          animation: shrink_width 300ms ease-out #{300 + ($i * 150)}ms 1 alternate forwards;
        }
      }
    }

    &.exit {
      transition-property: background-color;
      background: #191b2900;
    }
  }
</style>
