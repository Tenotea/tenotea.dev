<template>
  <section class="image-viewer-root">
    <!-- Mini -->
    <image-viewer-mini :src="currentImageInView"/>
    <!-- Full screen -->
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../db/projects/projects';
import ImageViewerMini from './ImageViewerMini.vue';

export default defineComponent({
  components: { ImageViewerMini },
  props: {
    images: {
      type: Array as PropType<ProjectImage[]>,
      default: []
    }
  },

  data () {
    return {
      currentImageIndex: 0
    }
  },

  computed: {
    currentImageInView (): ProjectImage {
      return this.images[this.currentImageIndex]
    }
  }
})
</script>

