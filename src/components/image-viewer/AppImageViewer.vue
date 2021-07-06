<template>
  <section class="image-viewer-root">
    <!-- Mini -->
    <image-viewer-mini :src="currentImageInView" :next="hasNextImage" :previous="hasPreviousImage" @change-image="changeImage" />
    <!-- Full screen -->
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
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
    },

    hasNextImage ():boolean {
      console.log(this.images.length - 1 )
      return this.images.length - 1 > this.currentImageIndex 
    },

    hasPreviousImage():boolean {
      return this.currentImageIndex > 0
    }
  },

  provide () {
    return {
      hasNextImage: computed(() => this.hasNextImage),
      hasPreviousImage: computed(() => this.hasPreviousImage)
    }
  },

  methods: {
    changeImage (method: 'next' | 'prev') {
      if (method === 'next' && this.hasNextImage) {
        this.currentImageIndex++
      }

      if (method === 'prev' && this.hasPreviousImage) {
        this.currentImageIndex--
      }
    }
  }
})
</script>

