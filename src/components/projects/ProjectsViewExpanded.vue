<template>
  <div>
    <div class="project-data" ref="projectData">
      <div class="project-data-column-one" ref="projectColumnOne">
        <div class="project-data-column-one-container" ref="projectColumnOneContainer">
          <projects-project-header />
          <div class="project-data-image">
            <projects-project-image />
          </div>
        </div>
      </div>
      <div class="project-data-column-two" ref="projectColumnTwo">
        <projects-project-description-block title="description">
          {{ project.description }}
        </projects-project-description-block>

        <projects-project-description-block title="My role">
          {{ project.myRole }}
        </projects-project-description-block>

        <projects-project-description-block title="duration of completion">
          {{ project.durationOfCompletion }}
        </projects-project-description-block>

        <projects-project-description-block title="Technologies">
          <project-information-grid-list :list="project.technologies" />
        </projects-project-description-block>

        <projects-project-description-block title="Products developed">
          <project-information-grid-list :list="project.productsDeveloped" />
        </projects-project-description-block>
      </div>
      <section class="snapshot-section">
        <div class="section-title">
          <common-section-title>
            Product Snapshots
          </common-section-title>
        </div>

        <div class="image-viewer-section">
          <app-image-viewer :images="project.snapshots" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import ProjectsProjectHeader from './ProjectsProjectHeader.vue'
import ProjectsProjectImage from './ProjectsProjectImage.vue'
import ProjectsProjectDescriptionBlock from './ProjectsProjectDescriptionBlock.vue';
import { PortfolioProject } from '../../db/projects/projects';
import ProjectsProjectProductsDevelopedBlock from './ProjectsProjectProductsDevelopedBlock.vue';
import ProjectInformationGridList from './ProjectInformationGridList.vue';
import CommonSectionTitle from '../common/CommonSectionTitle.vue';
import AppImageViewer from '../image-viewer/AppImageViewer.vue';

export default defineComponent({
  components: { ProjectsProjectHeader, ProjectsProjectImage, ProjectsProjectDescriptionBlock, ProjectsProjectProductsDevelopedBlock, ProjectInformationGridList, CommonSectionTitle, AppImageViewer },
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

    const projectColumnOne = <HTMLDivElement> this.$refs.projectColumnOne
    const projectColumnTwo = <HTMLDivElement> this.$refs.projectColumnTwo
    const projectColumnOneContainer = <HTMLDivElement> this.$refs.projectColumnOneContainer
    
    window.addEventListener('scroll', () => {
      const availableSpaceBelowFixedElement = projectColumnOne.getBoundingClientRect()
      if (availableSpaceBelowFixedElement.y < projectColumnOneContainer.clientHeight - projectColumnTwo.clientHeight + 100) {
        projectColumnOne.style.transform = 'translateZ(0)'
        projectColumnOneContainer.style.bottom = '0px'
      } else {
        projectColumnOne.style.transform = 'unset'
        projectColumnOneContainer.style.bottom = 'unset'
      }
    })
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.project-data {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  .project-data-image {
    margin-top: 70px;
    max-width: 450px;
  }
  .project-data-column-two {
    max-width: 600px;
  }
  .project-data-column-one {
    height: 100%;
  }
  @media screen and #{globals.$breakpoint-md} {
    display: grid;
    gap: 50px;
    grid-gap: 50px;
    grid-template-columns: repeat(2, 1fr );
    .project-data-column-two {
      margin-top: 70px;
    }
    .project-data-column-one {
      margin-bottom: 70px;
    }
    .project-data-column-one-container {
      position: fixed;
      width: 100%;
      transition: ease 100ms all;
    }
  }
}
.snapshot-section {
  grid-column-start: 1;
  grid-column-end: 3;
  position: relative;
  z-index: 1;
  min-height: 600px;
  margin-top: 70px;

  .image-viewer-section {
    margin: 40px auto;
  }
}
</style>
