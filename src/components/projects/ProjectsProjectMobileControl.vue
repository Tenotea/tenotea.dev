<template>
  <div class="controls" >
    <div key="1" class="control-icon">
      <app-icon icon="arrow-left" size="1.8" />
    </div>
    <div key="2" class="control-icon"  >
      <app-icon icon="arrow-right" size="1.8" />
    </div>
  </div>
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
.controls {
  max-width: max-content;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  $gap: 18px;
  grid-gap: $gap;
  gap: $gap;
  .control-icon {
    padding: 8px;
    clip-path: circle();
    background: rgba(globals.$rankOrange, 1);
    color: white;
    .app-icon {
      font-weight: bold;
    }
  }
}
</style>
