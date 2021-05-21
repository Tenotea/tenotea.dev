<template>
  <section>
    <div class="work_header">
      <common-section-title>
        Work Experience
      </common-section-title>
    </div>
    <projects-window v-for="project in projects" :key="project.position" :project="project" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonSectionTitle from '../../common/CommonSectionTitle.vue'
import ProjectsWindow from './ProjectsWindow.vue'

export interface ProjectInformation {
  name: string
  link: string
  url: string
  theme: string
  reversed: boolean
  description: string
  stack: {
    id: number
    name: string
    url: string
  }[]
  meta: boolean
  images: string[]
  position: number
}

export default defineComponent({
  components: { ProjectsWindow, CommonSectionTitle },
  data: () => ({
    projects: [{
      name: 'Arioso',
      link: 'arioso.ml',
      url: 'https://arioso.ml',
      theme: '#4778ff',
      description: 'A fully featured web based music player built with nuxt.js with PWA features.',
      stack: [{
        id: 1,
        name: 'Nuxt.js',
        url: 'https://nodejs.org'
      }, {
        id: 2,
        name: 'Local Forage',
        url: 'https://localforage.github.io'
      }],
      meta: false,
      images: ['https://i.ibb.co/h907Zwm/Arioso-01.png', 'https://i.ibb.co/BjLkQNh/arioso-2.png'],
      position: 1
    }, {
      name: 'Movie Fetchers',
      link: 'moviefetchers.cf',
      url: 'https://moviefetchers.cf',
      theme: '#ff4747',
      reversed: true,
      description: 'Moviefetchers provides access to a collection library of downloadable asian dramas.',
      stack: [{
        id: 1,
        name: 'Vue.js',
        url: 'https://vuejs.org'
      }, {
        id: 4,
        name: 'Vuetify.js',
        url: 'https://vuetifyjs.com'
      }, {
        id: 2,
        name: 'Node.js',
        url: 'https://nodejs.org'
      }, {
        id: 3,
        name: 'MongoDB',
        url: 'https://mongodb.com'
      }],
      meta: false,
      images: ['https://i.ibb.co/mG10p98/moviefetchers-01.png', 'https://i.ibb.co/XJMXb1v/moviefetchers-02.png'],
      position: 2
    }] as ProjectInformation[]
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
