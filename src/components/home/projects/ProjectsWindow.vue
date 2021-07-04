<template>
  <section id="projects" ref="projectsSection">
    <div class="layer_bg_one">
      <h1 class="project_name" ref="waterMark"> {{ project.name }} </h1>
    </div>
    <div class="layer_bg_two" :class="{ scrolled_into_view: scrolled, reverse: project.position === 2 }" :style="cssVars">
    </div>

    <div class="content_container">
      <project-card :project="project" :reverse="project.position === 2" />
    </div>
  </section>  
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
import gsap, { Power1 } from 'gsap/all'
import CommonSectionTitle from '../../common/CommonSectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
import { PortfolioProject } from '../../../db/projects/projects'

export default defineComponent({
  components: { CommonSectionTitle, ProjectCard },

  props: {
    project: {
      type: Object as PropType<PortfolioProject>,
      required: true
    }
  },
  
  data: () => ({
    scrolled: false
  }),

  computed: {
    cssVars():any {
      return {
        '--theme': this.project.theme
      }
    }
  },

  mounted () {
    const projectsSection = <HTMLDivElement> this.$refs.projectsSection
    let intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        this.scrolled = isIntersecting
      })
    }, {
      threshold: 0.3
    })
    intersectionObserver.observe(projectsSection)

    const waterMark = <HTMLDivElement> this.$refs.waterMark
    new IntersectionObserver((entries, observer) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          gsap.fromTo(waterMark, {
            x: !(this.project.position === 2) ? '-80%' : '20%',
            opacity: 0
          }, {
            x: '0%',
            duration: 1,
            opacity: 1,
            ease: Power1.easeInOut
          })
        }
      })
    }).observe(waterMark)
  }
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components//home/projects/Projects.scss';
</style>
