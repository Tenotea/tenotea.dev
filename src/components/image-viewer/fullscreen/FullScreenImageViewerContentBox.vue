<template>
  <div class="content-box">
    <div v-if="previous" class="content-box__control control-left" @click="handleControlClick('prev')">
      <div class="icon" >
        <app-icon icon="chevron-left" :size="'2.5'" />
      </div>
    </div>
    <img :src="src.highResUrl || src.url" :alt="src.name" />
    <div v-if="next" class="content-box__control control-right" @click="handleControlClick('next')">
      <div class="icon" >
        <app-icon icon="chevron-right" :size="'2.5'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from 'vue'
import { ProjectImage } from '../../../db/projects/projects';
import AppIcon from '../../common/AppIcon.vue';

export default defineComponent({
  components: { AppIcon },
  setup() {
    const next:boolean = inject('hasNextImage', false)
    const previous:boolean = inject('hasPreviousImage', false)
    return { next, previous }
  },

  props: {
    src: {
      type: Object as PropType<ProjectImage>,
      required: true
    }
  },

  emits: [
    'changeImage'
  ],

  methods: {
    handleControlClick (action: string) {
      this.$emit('changeImage', action)
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.content-box {
  max-width: 1400px;
  margin: 50px auto;
  position: relative;
  img {
    width: 95%;
    max-width: inherit;
    display: block;
    margin: auto;
    box-shadow: 2px 2px 20px rgba($color: #000000, $alpha: 0.3);
  }
  &__control {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 10px;
    transition: 200ms ease-in-out background;
    cursor: pointer;
    &:hover {
      background: rgba($color: globals.$primaryOrange, $alpha: 0.01);
      .icon {
        color: globals.$primaryOrange
      }
    }
    &.control-left {
      left: 0;
    }
    &.control-right {
      right: 0;
    }
  }
}
</style>
