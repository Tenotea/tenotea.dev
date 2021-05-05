<template>
  <i :class="`mdi mdi-${icon} app-icon`" :style="cssVars" @click="handleClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1'
    },
    hover: {
      type: String,
      default: 'inherit'
    }
  },

  emits: ['click'],

  computed: {
    cssVars ():any {
      return {
        '--size': this.size + 'em',
        '--hover': this.hover
      }
    }
  },

  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
})
</script>

<style scoped lang="scss">
  .mdi.app-icon {
    font-size: var(--size);
    color: inherit;
    transition: all ease-in 100ms;
    &:hover {
      color: var(--hover);
    }
  }
</style>
