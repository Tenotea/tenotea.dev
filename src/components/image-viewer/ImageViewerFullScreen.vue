<template>
  <teleport to="body">
    <section class="image-viewer-fullscreen">
      <fullscreen-image-viewer-title-bar :title="src.name || 'Project Snapshot'" @exit-full-screen="handleExitFullScreen" />
      <div class="image-viewer-fullscreen__content-box">
        <full-screen-image-viewer-content-box :src="src" @change-image="handleChangeImage" />
      </div>
      <full-screen-image-viewer-controls :activeIndex="src.id" :thumbs="thumbs" @jumpto-image="handleJumpToImage" />
    </section>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProjectImage } from '../../db/projects/projects';
import FullscreenImageViewerTitleBar from './fullscreen/FullscreenImageViewerTitleBar.vue';
import FullScreenImageViewerContentBox from './fullscreen/FullScreenImageViewerContentBox.vue';
import FullScreenImageViewerControls from './fullscreen/FullScreenImageViewerControls.vue';

export default defineComponent({
  components: {FullscreenImageViewerTitleBar, FullScreenImageViewerContentBox, FullScreenImageViewerControls},
  emits: ['exitFullScreen', 'changeImage', 'jumptoImage'],
  props: {
    src: {
      type: Object as PropType<ProjectImage>,
      required: true
    },
    thumbs: {
      type: Object as PropType<ProjectImage[]>,
      required: true
    }
  },

  methods: {
    handleExitFullScreen () {
      this.$emit('exitFullScreen')
    },
    
    handleChangeImage(action: string) {
      this.$emit('changeImage', action)
    },

    handleJumpToImage (id: number) {
      this.$emit('jumptoImage', id)
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.image-viewer-fullscreen {
  position: fixed;
  z-index: 1000;
  background: globals.$primaryDark;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  &__content-box {
    margin: auto;
  }
}
</style>
