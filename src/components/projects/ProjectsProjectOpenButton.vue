<template>
  <a class="action-container" target="_blank" href="/">
    <button class="website-action-button">
      <app-icon icon="link" size="1.4" />
      Visit Website
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  setup() {
    
  },
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
    background-color: globals.$text-highlight-blue;
    padding: 4px 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    grid-gap: 10px;
  }
}
</style>
