<template>
  <div class="controls" >
    <div key="1" class="control-icon">
      <app-icon icon="arrow-left" size="1.4" @click="handleClick('prev')" />
    </div>
    <div key="2" class="control-icon" @click="handleClick('next')">
      <app-icon icon="arrow-right" size="1.4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  emits: ['projectChange'],
  
  methods: {
    handleClick (action: string) {
      this.$emit('projectChange', action)
    }
  }
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
    // padding: 8px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    // clip-path: circle();
    border-radius: 50%;
    background: rgba(globals.$textGray, 0.3);
    border: 2px solid globals.$textGray;
    color: globals.$textGray;
    .app-icon {
      font-weight: bold;
    }
  }
}
</style>
