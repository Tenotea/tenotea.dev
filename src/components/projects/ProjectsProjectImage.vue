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
  .image-item {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('https://i.ibb.co/mG10p98/moviefetchers-01.png');
    min-height: 450px;
    min-width: 800px;
    z-index: 1;
    border-radius: inherit;
  }
  &::after {
    content: '';
    position: absolute;
    $offset: -30px;
    top: $offset;
    left: $offset;
    background-color: globals.$secondaryDark;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: inherit;
    transition: ease-in-out 300ms;
    transition-property: top, left;
  }
  &:hover {
    &::after {
      $offset: -40px;
      top: $offset;
      left: $offset;
    }
  }
}
</style>
