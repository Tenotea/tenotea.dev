<template>
  <div>
    <div class="project-data">
      <projects-project-header />
      <div class="project-data-column-two">
        <projects-project-image />
        <projects-project-description-block style="margin-top: 40px;" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsProjectHeader from './ProjectsProjectHeader.vue'
import ProjectsProjectImage from './ProjectsProjectImage.vue'
import ProjectsProjectDescriptionBlock from './ProjectsProjectDescriptionBlock.vue';

export default defineComponent({
  components: { ProjectsProjectHeader, ProjectsProjectImage, ProjectsProjectDescriptionBlock },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.project-data {
  display: grid;
  grid-template-columns: repeat(2, auto);
}
</style>
