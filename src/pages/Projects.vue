<template>
  <main id="projects">
      <projects-project-controls icon="chevron-left" reverse>
        Prev
      </projects-project-controls>
      <div class="projects-container">
        <projects-navigation />
        <div class="projects-body">
          <projects-view-collapsed />
        </div>
      </div>
      <div class="project-position-tracker">
        <projects-position-tracker />
      </div>
      <projects-project-controls icon="chevron-right">
        next
      </projects-project-controls>
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

export default defineComponent({
  components: { ProjectsNavigation, ProjectsViewCollapsed, ProjectsProjectControls, ProjectsPositionTracker, ProjectsBottomNavigation },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
  .projects-container {
    max-width: 1300px;
    margin: auto;
    padding: 60px 40px;
    
    .projects-body {
      @media screen and #{globals.$breakpoint-sm} {
        margin-top: 70px
      }
    }
  }
  .project-position-tracker {
    margin: auto;
    max-width: max-content;
    margin-bottom: 40px;
  }
</style>
