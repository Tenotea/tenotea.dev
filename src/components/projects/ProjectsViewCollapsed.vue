<template>
  <div class="project-data" ref="projectData">
    <projects-project-header />
    <div class="project-data-column-two">
      <projects-project-image />
      <projects-project-description-block style="margin-top: 40px;" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import ProjectsProjectHeader from './ProjectsProjectHeader.vue'
import ProjectsProjectImage from './ProjectsProjectImage.vue'
import ProjectsProjectDescriptionBlock from './ProjectsProjectDescriptionBlock.vue';
import { PortfolioProject } from '../../db/projects/projects';

export default defineComponent({
  components: { ProjectsProjectHeader, ProjectsProjectImage, ProjectsProjectDescriptionBlock },
  emits: ['heightChange'],
  props: {
    project: {
      type: Object as PropType<PortfolioProject>,
      required: true
    }
  },

  provide () {
    return {
      currentProject: computed(() => this.project)
    }
  },

  mounted () {
    const projectDataDiv = <HTMLDivElement> this.$refs.projectData
    this.$emit('heightChange', projectDataDiv.getBoundingClientRect().height)
    window.addEventListener('resize', () => {
      this.$emit('heightChange', projectDataDiv.getBoundingClientRect().height)
    })
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.project-data {
  width: 100%;
  display: grid;
  gap: 10px;
  grid-gap: 10px;
  position: absolute;
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
