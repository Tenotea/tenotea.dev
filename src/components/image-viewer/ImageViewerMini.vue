<template>
  <div class="image-container">
    <image-viewer-title-bar :image-title="src.name" />
    <image-viewer-content-box :src="src" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../db/projects/projects';
import ImageViewerTitleBar from './mini/ImageViewerTitleBar.vue'
import ImageViewerContentBox from './mini/ImageViewerContentBox.vue';

export default defineComponent({
  components: { ImageViewerTitleBar, ImageViewerContentBox },
  props: {
    src: {
      type: Object as PropType<ProjectImage>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.image-container {
  border-radius: 10px;
}
</style>
