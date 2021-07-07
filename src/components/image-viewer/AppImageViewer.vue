<template>
  <section class="image-viewer-root">
    <!-- Mini -->
    <image-viewer-mini :src="currentImageInView" :next="hasNextImage" :previous="hasPreviousImage" @change-image="changeImage" @goFullScreen="handleGoFullScreen" />
    <!-- Full screen -->
    <image-viewer-full-screen v-if="openInFullScreen" :src="currentImageInView" :thumbs="images" @exitFullScreen="exitFullScreen" @change-image="changeImage" @jumpto-image="jumpToImage" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../db/projects/projects';
import ImageViewerFullScreen from './ImageViewerFullScreen.vue';
import ImageViewerMini from './ImageViewerMini.vue';

export default defineComponent({
  components: { ImageViewerMini, ImageViewerFullScreen },
  props: {
    images: {
      type: Array as PropType<ProjectImage[]>,
      default: []
    }
  },

  data () {
    return {
      currentImageIndex: 0,
      openInFullScreen: false
    }
  },

  computed: {
    currentImageInView (): ProjectImage {
      return this.images[this.currentImageIndex]
    },

    hasNextImage ():boolean {
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
    },

    jumpToImage (id: number) {
      console.log(id)
      this.currentImageIndex = id - 1
    },

    handleGoFullScreen () {
      this.openInFullScreen = true
    },

    exitFullScreen () {
      this.openInFullScreen = false
    }
  }
})
</script>
