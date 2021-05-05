<template>
  <div class="ham" @click="openNavigation">
    <hr class="stroke one">
    <hr class="stroke two">
    <hr class="stroke three">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['openNavigation'],
  methods: {
    openNavigation () {
      this.$emit('openNavigation')
    }
  }
})
</script>

<style scoped lang="scss">
  @import '../../../styles/components/app/header/AppHamburger.scss';
</style>
