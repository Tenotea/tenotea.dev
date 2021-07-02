<template>
  <div class="control" :class="{ reverse: reverse }">
    <div class="placeholder_element" :class="{ reverse: reverse }">
      <p class="control--name" :class="{ reverse: reverse }">
        <slot />
        <app-icon :icon="icon" class="control--name__icon" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  props: {
    icon: {
      type: String,
      default: ''
    },
    reverse: {
      type: Boolean
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.control {
  @media screen and #{globals.$breakpoint-md} {
    display: flex;
  }
  max-width: max-content;
  display: none;
  min-height: 100vh;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  &.reverse {
    left: 0;
  }
  // background: rgba(255, 255, 255, 0.179);
  .placeholder_element {
    margin: auto;
    position: relative;
    cursor: pointer;
    &:hover {
      .control--name {
        transform: translateX(-3px);
        &__icon {
          transform: translateX(3px);
        }
        // gap: 4px;
      }
    }
    &::before {
      position: absolute;
      top: -30px;
      left: 25px;
      width: 70px;
      height: 70px;
      content: '';
      z-index: 0;
      background: globals.$secondaryDark;
    }
    &.reverse {
      &::before {
        top: -30px;
        left: -25px;
      }
    }
  }
  &--name {
    transition: ease-in-out 200ms;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 2px;
    grid-gap: 2px;
    gap: 2px;
    margin-right: 25px;
    &.reverse {
      flex-direction: row-reverse;
      margin-left: 25px;
    }
  }
}
</style>
