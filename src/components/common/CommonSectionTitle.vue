<template>
  <div class="section_title">
    <common-square-grid
      size="6px"
      md-size="6px"
      md-gap="5px"
      md-left="-15px"
      left="-10px"
      top="-7px"
      color="#5A4B3F"
    />
    <div class="section_title__title">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonSquareGrid from './CommonSquareGrid.vue'

export default defineComponent({
  components: { CommonSquareGrid },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  @use '../../styles/variables.scss' as globals; 
  .section_title {
    margin-left: 30px;
    position: relative;
    &__title {
      font-size: 3em;
      font-weight: 600;
      line-height: 1em;
      color: #828282;
      @media screen and #{globals.$breakpoint-md} {
        font-size: 4em;
      }
    }
  }
</style>
