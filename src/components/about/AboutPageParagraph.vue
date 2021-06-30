<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as globals;
.paragraph {
  color: globals.$textGray;
  max-width: 600px;
  margin: 30px auto;
  font-weight: 300;
  line-height: 2.3em;
  letter-spacing: 0.03em;
  font-size: 0.9em;
  @media screen and #{globals.$breakpoint-sm} {
    font-size: 1em;
  }
}
</style>
