<template>
  <main id="projects">
    <div class="projects-container">
      <projects-navigation />
      <div class="projects-body">
        <projects-view-collapsed />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsNavigation from '../components/projects/ProjectsNavigation.vue'
import ProjectsViewCollapsed from '../components/projects/ProjectsViewCollapsed.vue';

export default defineComponent({
  components: { ProjectsNavigation, ProjectsViewCollapsed },
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
