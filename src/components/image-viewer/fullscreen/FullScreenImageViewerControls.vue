<template>
  <div class="control-images">
    <div class="control-images__container">
      <div v-for="thumb in thumbs" :key="thumb.id" class="control-images__image-box" :class="{active: thumb.id === activeIndex}" @click="$emit('jumptoImage', thumb.id - 1)">
        <img :src="thumb.url" :alt="thumb.name" class="control-images__image-box--image">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../../db/projects/projects';

export default defineComponent({
  setup() {
    
  },
  props: {
    thumbs: {
      type: Array as PropType<ProjectImage[]>,
      required: true
    },

    activeIndex: {
      type: Number,
      required: true
    }
  },
  emits: ['jumptoImage']
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.control-images {
  border-top: 2px solid globals.$secondaryDark;
  padding: 20px;
  &__container {
    max-width: 1300px;
    overflow: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
    grid-gap: 10px;
    flex-wrap: nowrap;
    margin: auto;
    width: max-content;
  }
  &__image-box {
    width: 50px;
    height: 50px;
    cursor: pointer;
    &.active {
      padding: 3px;
      border: 1px solid globals.$primaryOrange;
    }
    &--image {
      width: 100%;
      height: 100%;
      box-shadow: 1px 1px 6px rgba($color: #000000, $alpha: 0.3);
    }
  }
}
</style>
