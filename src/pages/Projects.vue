<template>
  <main id="projects">
      <div class="projects-container">
        <projects-navigation />
        <div class="projects-body">
          <projects-view-collapsed />
        </div>
      </div>
      <projects-project-controls icon="chevron-left" reverse>
        Prev
      </projects-project-controls>
      <projects-project-controls icon="chevron-right">
        next
      </projects-project-controls>
      <div class="project-position-tracker">
        <projects-position-tracker />
      </div>
      <div class="project-mobile-controls">
        <projects-project-mobile-control />
      </div>
      <projects-bottom-navigation />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsNavigation from '../components/projects/ProjectsNavigation.vue'
import ProjectsViewCollapsed from '../components/projects/ProjectsViewCollapsed.vue';
import ProjectsProjectControls from '../components/projects/ProjectsProjectControls.vue';
import ProjectsPositionTracker from '../components/projects/ProjectsPositionTracker.vue';
import ProjectsBottomNavigation from '../components/projects/ProjectsBottomNavigation.vue';
import ProjectsProjectMobileControl from '../components/projects/ProjectsProjectMobileControl.vue';

export default defineComponent({
  components: { ProjectsNavigation, ProjectsViewCollapsed, ProjectsProjectControls, ProjectsPositionTracker, ProjectsBottomNavigation, ProjectsProjectMobileControl },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
  .projects-container {
    max-width: 1300px;
    margin: auto;
    padding: 50px 40px;
    .projects-body {
      @media screen and #{globals.$breakpoint-sm} {
        margin-top: 70px;
        padding: 0px 40px;
      }
    }
  }
  .project-position-tracker {
    margin: auto;
    max-width: max-content;
    margin-bottom: 40px;
  }
  .project-mobile-controls {
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 100;
    @media screen and #{globals.$breakpoint-sm} {
      display: none;
    }
  }
</style>
