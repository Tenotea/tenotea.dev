<template>
  <div class="image-viewer-action-bar">
    <div class="actions">
      <div class="actions-container">
        <div v-show="previous" class="control" @click="handleControlClick('prev')">
          <app-icon icon="chevron-left" />
          <span class="control-name">
            prev
          </span> 
        </div>
        <div v-show="next" class="control" @click="handleControlClick('next')">
          <span class="control-name">
            next
          </span> 
          <app-icon icon="chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import AppIcon from '../../common/AppIcon.vue'

export default defineComponent({
  setup () {
    const next:boolean = inject('hasNextImage', false)
    const previous:boolean = inject('hasPreviousImage', false)
    return {
      next, previous
    }
  },

  components: { AppIcon },
  emits: ['imageChange'],
  methods: {
    handleControlClick (action: string) {
      this.$emit('imageChange', action)
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as globals;
.image-viewer-action-bar {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  background: globals.$secondaryDark;
  padding: 15px 35px;
  .actions {
    width: 100%;
    .actions-container {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      grid-gap: 20px;
      margin: auto;
      .control {
        padding: 4px 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: globals.$primaryDark;
        border-radius: 3px;
        transition: ease-in-out 100ms background;
        cursor: pointer;
        &:hover {
          background: globals.$text-highlight-blue;
        }
        &:nth-child(2) {
          margin-left: auto;
        }
        .control-name {
          font-size: 0.7em;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
        }
      }
    }
  }
}
</style>
