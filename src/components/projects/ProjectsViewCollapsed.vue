<template>
  <div>
    <div class="project-data">
      <projects-project-header />
      <div class="project-data-column-two">
        <projects-project-image />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsProjectHeader from './ProjectsProjectHeader.vue'
import ProjectsProjectImage from './ProjectsProjectImage.vue'

export default defineComponent({
  components: { ProjectsProjectHeader, ProjectsProjectImage },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.project-data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
