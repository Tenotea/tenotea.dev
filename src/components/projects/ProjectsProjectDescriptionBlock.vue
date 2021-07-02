<template>
  <section class="description-block">
    <h6 class="block-title">
      Description
    </h6>
    <p class="block-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus minima dolor blanditiis quasi quidem. Aliquid dolorem, quod cupiditate asperiores neque voluptatem. Dignissimos praesentium cupiditate quia fugiat doloribus perspiciatis nostrum.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.description-block {
  max-width: 800px;
  .block-title {
    font-weight: 500;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 8px;
  }
  .block-content {
    color: globals.$desaturated-yellow;
    font-size: 0.9em;
    line-height: 2em;
    letter-spacing: 0.01em;
  }
}
</style>
