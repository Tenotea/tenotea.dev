<template>
  <div class="image-box">
    <div class="image-item">

    </div>
  </div>
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
.image-box {
  position: relative;
  width: max-content;
  border-radius: 10px;
  width: 100%;
  .image-item {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    background-image: url('https://i.ibb.co/mG10p98/moviefetchers-01.png');
    max-width: 800px;
    height: 300px;
    @media screen and #{globals.$breakpoint-sm} {
      height: 400px;
    }
    width: 100%;
    z-index: 1;
    border-radius: inherit;
  }
  &::after {
    content: '';
    position: absolute;
    $offset: -20px;
    top: $offset;
    left: $offset;
    background-color: globals.$secondaryDark;
    opacity: 0.4;
    width: 100%;
    max-width: 800px;
    height: 100%;
    z-index: 0;
    border-radius: inherit;
    transition: ease-in-out 300ms;
    transition-property: top, left;
  }
  &:hover {
    &::after {
      $offset: -30px;
      top: $offset;
      left: $offset;
    }
  }
}
</style>
