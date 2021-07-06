<template>
  <main id="projects">
    <div class="projects-container">
      <projects-navigation :label="projectsFilterLabel" />
      <div class="projects-body" :style="{height: projectBodyHeight}">
        <transition :name="transitionName">
          <projects-view-collapsed v-if="!projectId" :key="currentProjectInView.id" :project="currentProjectInView" @heightChange="setProjectBodyHeight" :label="projectsFilterLabel" />
          <projects-view-expanded v-else :project="currentProjectInView" :key="currentProjectInView.id" @heightChange="setProjectBodyHeight" />
        </transition>
      </div>
    </div>
    <transition name="control-prev">
      <projects-project-controls v-if="currentProjectIndex > 0" icon="chevron-left" reverse @project-change="handleProjectChange">
        Prev
      </projects-project-controls>
    </transition>
    <transition name="control-next">
      <projects-project-controls v-if="currentProjectIndex < projects.length - 1" icon="chevron-right" @project-change="handleProjectChange">
        next
      </projects-project-controls>
    </transition>

    <div class="project-position-tracker">
      <projects-position-tracker 
        :currentNumber="currentProjectIndex + 1"
        :totalProjects="projects.length"
      />
    </div>

    <div class="project-mobile-controls">
      <projects-project-mobile-control @projectChange="handleProjectChange" />
    </div>

    <projects-bottom-navigation :label="projectsFilterLabel" />
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
import projectObjects, { PortfolioProject } from '../db/projects/projects';
import ProjectsViewExpanded from '../components/projects/ProjectsViewExpanded.vue';

export default defineComponent({
  components: { ProjectsNavigation, ProjectsViewCollapsed, ProjectsProjectControls, ProjectsPositionTracker, ProjectsBottomNavigation, ProjectsProjectMobileControl, ProjectsViewExpanded },

  props: {
    projectId: {
      type: String,
      default: ''
    }
  },

  setup() {
    return {
      projects: projectObjects
    }
  },

  data: () => ({
    currentProjectIndex: 0,
    transitionName: 'project-next',
    projectBodyHeight: '0px'
  }),

  computed: {
    currentProjectInView (): PortfolioProject {
      return this.projects[this.currentProjectIndex]
    },

    projectsFilterLabel (): string {
      return <string> this.$route.query.label || ''
    }
  },

  created () {
    if (this.projectId) {
      this.currentProjectIndex = this.projects.findIndex(el => el.id === this.projectId)
    }
  },

  methods: {
    handleProjectChange (action: string) {
      if (action === 'next') {
        this.transitionName = `project-${action}`
        if ( this.currentProjectIndex < this.projects.length - 1 ) this.currentProjectIndex += 1
      } else if (action === 'prev') {
        this.transitionName = `project-${action}`
        if (this.currentProjectIndex > 0) this.currentProjectIndex -= 1
      }

      if (this.projectId) {
        const nextProject = this.projects[this.currentProjectIndex]
        this.$router.push(`/projects/${nextProject.id}${this.projectsFilterLabel ? '?label='+this.projectsFilterLabel : ''}`)
      }
    },

    setProjectBodyHeight (height: number) {
      this.projectBodyHeight = height + 'px'
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
  .projects-container {
    max-width: 1300px;
    margin: auto;
    padding: 50px 40px;
    .projects-body {
      position: relative;
      width: 100%;
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

  .project-next-enter-active, .project-next-leave-active, .project-prev-enter-active, .project-prev-leave-active {
    // position: absolute;
    transform-style: preserve-3d;
    transition: 0.5s ease;
    transition-property: transform, opacity;
  }
  
  .project-prev-enter-from, .project-next-leave-to {
    opacity: 0;
    transform: translateX(-60%);
  }
  
  .project-prev-leave-to, .project-next-enter-from {
    opacity: 0;
    transform: translateX(60%);
  }

  .control-prev-enter-active, .control-next-enter-active, .control-prev-leave-active , .control-next-leave-active {
    transition: 0.5s ease;
    transition-property: transform, opacity;
    // position: absolute;
  }

  .control-prev-enter-from, .control-prev-leave-to {
    transform: translateX(-100%);
  }
  .control-next-enter-from, .control-next-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
