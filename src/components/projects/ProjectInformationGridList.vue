<template>
  <div class="grid-box">
    <p v-for="item in list" :key="item.id || item" class="grid-item">
      - {{ item.name || item }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<any[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
* {
  font-size: inherit;
  color: inherit;
  letter-spacing: inherit;
}
.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
</style>

