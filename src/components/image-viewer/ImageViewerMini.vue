<template>
  <div class="image-container">
    <image-viewer-title-bar :image-title="src.name" />
    <image-viewer-content-box :src="src" @view-maximized="handleViewMaximized" />
    <image-viewer-controls @image-change="handleImageChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../db/projects/projects';
import ImageViewerTitleBar from './mini/ImageViewerTitleBar.vue'
import ImageViewerContentBox from './mini/ImageViewerContentBox.vue';
import ImageViewerControls from './mini/ImageViewerControls.vue';

export default defineComponent({
  components: { ImageViewerTitleBar, ImageViewerContentBox, ImageViewerControls },
  props: {
    src: {
      type: Object as PropType<ProjectImage>,
      required: true
    }
  },

  emits: ['changeImage', 'goFullScreen'],

  methods: {
    handleImageChange (action: string) {
      this.$emit('changeImage', action)
    },

    handleViewMaximized () {
      this.$emit('goFullScreen')
    }
  }
})
</script>

<style lang="scss" scoped>
.image-container {
  border-radius: 10px;
  box-shadow: 3px 3px 30px rgba(0,0,0,0.2);
  transition: ease-out 300ms box-shadow;
  &:hover {
    box-shadow: 3px 3px 80px rgba(0,0,0,0.5)
  }
}
</style>
