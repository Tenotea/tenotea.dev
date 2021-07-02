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
      <projects-project-controls icon="chevron-right">
        next
      </projects-project-controls>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsNavigation from '../components/projects/ProjectsNavigation.vue'
import ProjectsViewCollapsed from '../components/projects/ProjectsViewCollapsed.vue';
import ProjectsProjectControls from '../components/projects/ProjectsProjectControls.vue';

export default defineComponent({
  components: { ProjectsNavigation, ProjectsViewCollapsed, ProjectsProjectControls },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  .projects-container {
    max-width: 1300px;
    margin: auto;
    padding: 60px 40px;
    .projects-body {
      margin-top: 70px;
    }
  }
</style>
