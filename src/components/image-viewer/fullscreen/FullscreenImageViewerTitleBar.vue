<template>
  <div class="title-bar">
    <div class="title-bar__container">
      <div class="title-bar__image-title">
        <div class="title-bar__image-title--exit-icon" @click="$emit('exitFullScreen')">
          <AppIcon icon="arrow-left" size="2" />
        </div>
        <h3 class="title-bar__image-title--name">
          {{ title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../../common/AppIcon.vue';

export default defineComponent({
  components: { AppIcon },
  emits: ['exitFullScreen'],
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.title-bar {
  border-bottom: 2px solid globals.$secondaryDark;
  padding: 10px;
  &__container {
    max-width: 1300px;
    margin: auto;
  }
  &__image-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: max-content;
    color: globals.$desaturated-yellow;
    &--name {
      font-size: 1.8em;
      margin-left: 15px;
      color: inherit;
    }
    &--exit-icon {
      cursor: pointer;
      padding: 0px 6px;
      color: inherit;
      clip-path: circle();
      transition: 200ms ease-out background;
      &:hover {
        background: rgba($color: #ffffff, $alpha: 0.1);
      }
    }
  }
}
</style>
