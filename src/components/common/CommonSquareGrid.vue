<template>
  <div class="square-grid" :style="cssVars">
    <span v-for="n in amount" :key="n" :class="`tarmac __${n}`" ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    top: { type: String, default: '0px' },
    mdTop: { type: String, default: '' },
    left: { type: String, default: '0px' },
    mdLeft: { type: String, default: '' },
    right: { type: String, default: '0px' },
    mdRight: { type: String, default: '' },
    bottom: { type: String, default: '0px' },
    mdBottom: { type: String, default: '' },
    gap: { type: String, default: '5px' },
    mdGap: { type: String, default: '' },
    size: { type: String, default: '5px' },
    mdSize: { type: String, default: '5px' },
    column: { type: String, default: '5' },
    amount: { type: Number, default: 20 },
    color: { type: String, default: 'rgba(255, 255, 255, 0.26)'}
  },

  computed: {
    cssVars ():any {
      return {
        '--top': this.top,
        '--md-top': this.mdTop || this.top,
        '--left': this.left,
        '--md-left': this.mdLeft || this.left,
        '--bottom': this.bottom,
        '--md-bottom': this.mdBottom || this.bottom,
        '--right': this.right,
        '--md-right': this.mdRight || this.right,
        '--gap': this.gap,
        '--md-gap': this.mdGap || this.gap,
        '--size': this.size,
        '--md-size': this.mdSize || this.size,
        '--columns': this.column,
        '--color': this.color
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '../../styles/variables.scss' as colors;
  .square-grid {
    position: absolute;
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(var(--columns), var(--size));
    top: var(--top);
    left: var(--left);
    grid-gap: var(--gap);
    gap: var(--gap);
    @media screen and #{colors.$breakpoint-md} {
      grid-template-columns: repeat(var(--columns), var(--md-size));
      top: var(--md-top);
      left: var(--md-left);
      grid-gap: var(--md-gap);
      gap: var(--md-gap);
    }
    .tarmac {
      background-color: var(--color);
      display: block;
      border-radius: 50%;
      transition: ease-out 300ms;
      transition-property: width, height;
      width: var(--size);
      height: var(--size);
      @media screen and #{colors.$breakpoint-md} {
        width: var(--md-size);
        height: var(--md-size);
      }
    }
  }
</style>
