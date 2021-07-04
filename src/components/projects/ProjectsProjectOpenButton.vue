<template>
  <a class="action-container" target="_blank" :href="url">
    <button class="website-action-button">
      <app-icon icon="open-in-new" size="1.4" />
      View Project
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  props: {
    url: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.action-container {
  max-width: max-content;
  display: block;
  margin-top: 40px;
  &> * {
    cursor: inherit;
  }
  .website-action-button {
    border-radius: 4px;
    border: none;
    padding: 4px 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    grid-gap: 10px;
    box-shadow: 1px 3px 10px rgba($color: #000000, $alpha: 0.3);
    transition: 100ms ease-in;
    font-size: 0.9em;
    background-color: globals.$text-highlight-blue;
  }
}
</style>
