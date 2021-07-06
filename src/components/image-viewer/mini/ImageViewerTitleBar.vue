<template>
  <div class="title-bar">
    <div class="action-bar-elements">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>

    <h6 class="image-title">
      {{ imageTitle }}
    </h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imageTitle: {
      type: String,
      required: false,
      default: () => 'Project Snapshot'
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.title-bar {
  background: rgb(11, 19, 31);
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgb(32, 33, 56);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  .action-bar-elements {
    display: grid;
    grid-template-columns: repeat(3, auto);
    max-width: max-content;
    @media screen and #{globals.$breakpoint-md} {
      gap: 8px;
    }
    gap: 4px;
    margin-right: 20px;
    .circle {
      width: 6px;
      height: 6px;
      @media screen and #{globals.$breakpoint-md} {
        width: 10px;
        height: 10px;
      }
      border-radius: 50%;
      &:nth-child(1) {
        background: rgb(255, 227, 18);
      }
      &:nth-child(2) {
        background: rgb(0, 197, 0);
      }
      &:nth-child(3) {
        background: rgb(255, 45, 45);
      }
    }
  }
  .image-title {
    font-size: 0.8em;
  }
}
</style>
