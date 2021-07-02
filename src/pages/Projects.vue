<template>
  <main id="projects">
    <div class="projects-container">
      <projects-navigation />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsNavigation from '../components/projects/ProjectsNavigation.vue'

export default defineComponent({
  components: { ProjectsNavigation },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  .projects-container {
    max-width: 1300px;
    margin: auto;
    padding: 60px 40px;
  }
</style>
