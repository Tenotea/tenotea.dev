<template>
  <div class="position-tracker">
    {{ currentNumber }} of {{ totalProjects }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    currentNumber: {
      type: Number,
      required: true
    },
    totalProjects: {
      type: Number,
      required: true
    }
  }
})
</script>


<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.position-tracker {
  padding: 5px 10px;
  border-radius: 300px;
  background: rgba($color: globals.$desaturated-yellow, $alpha: 0.1);
  display: table;
  font-weight: 500;
  font-size: 0.8em;
  color: globals.$desaturated-yellow;
}
</style>
