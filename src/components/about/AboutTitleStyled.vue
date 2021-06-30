<template>
  <div class="title-container">
    <HeroBubble
      gradient="linear-gradient(-80deg, #433DFF, #17049C)"
      class="title-container--bubble"
      size="30"
    />
    <h3 class="title-container--content">
      about me
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroBubble from '../home/hero/HeroBubble.vue';

export default defineComponent({
    setup() {
    },
    components: { HeroBubble },
})
</script>

<style lang="scss" scoped>
  .title-container {
    margin: 30px auto;
    max-width: max-content;
    position: relative;
    &--content {
      position: inherit;
      z-index: 1;
      font-size: 1.2em;
    }
    &--bubble {
      position: absolute;
      z-index: 0;
      top: 0;
      left: -10px;
    }
  }
</style>
