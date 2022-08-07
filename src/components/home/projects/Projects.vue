<template>
  <section style="background: linear-gradient(to left, #191b29ce 30%, #191b29ce 30%);">
    <div class="work_header">
      <common-section-title>
        Work Experience
      </common-section-title>
    </div>
    <projects-window v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import projectObjects from '../../../db/projects/projects';
import CommonSectionTitle from '../../common/CommonSectionTitle.vue'
import ProjectsWindow from './ProjectsWindow.vue'


export default defineComponent({
  components: { ProjectsWindow, CommonSectionTitle },
  data: () => ({
    projects: projectObjects.slice(0, 5)
  })
})
</script>

<style lang="scss" scoped>
.work_header {
  position: relative;
  z-index: 1;
  margin: auto;
  max-width: 1200px;
  padding: 40px 10px;
}
</style>
