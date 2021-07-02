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
@use '@/styles/variables.scss' as globals;
.project-data {
  display: grid;
  margin: auto;
  .project-data-column-two {
    margin-top: 70px;
  }
  @media screen and #{globals.$breakpoint-md} {
    grid-template-columns: repeat(2, auto);
    .project-data-column-two {
      margin-top: 0px;
    }
  }
}
</style>
