<template>
  <i :class="`mdi mdi-${icon}`" />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    }
  }
})
</script>
