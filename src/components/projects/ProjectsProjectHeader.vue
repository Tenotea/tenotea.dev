<template>
  <div class="project-header">
    <h1 class="project-header--title">
      {{ project.name }}
    </h1>
    <p class="project-header--link">
      <app-icon icon="web" size="1.1" />
      <span class="project-link">
        {{ project.domainName }}
      </span>
    </p>
    <projects-project-open-button :url="project.url" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { PortfolioProject } from '../../db/projects/projects';
import AppIcon from '../common/AppIcon.vue'
import ProjectsProjectOpenButton from './ProjectsProjectOpenButton.vue'

export default defineComponent({
  setup () {
    const project = <PortfolioProject> inject('currentProject')
    return {
      project
    }
  },

  components: { AppIcon, ProjectsProjectOpenButton }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.project-header {
  @media screen and #{globals.$breakpoint-md} {
    width: max-content;
  }
  &--title {
    position: relative;
    z-index: 1;
    font-size: 2em;
    max-width: 600px;
    @media screen and #{globals.$breakpoint-sm} {
      font-size: 2.5em;
      @media screen and #{globals.$breakpoint-md} {
        max-width: 450px;
        font-size: 2.7em;
      }
    }
  }
  &--link {
    background: linear-gradient(45deg, globals.$secondaryOrange 30%, globals.$text-highlight-blue 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    background-size: 70%;
    transition: 900ms ease-out background-size;
    &:hover {
      background-size: 100%;
      text-decoration: underline;
    }
    .project-link {
      color: inherit;
      font-weight: 500;
      font-family: 'Open Sans';
      font-size: 0.9em;
      @media screen and #{globals.$breakpoint-sm} {
        font-size: 1.2em;
      }
      font-weight: 600;
      margin-left: 8px;
    }
  }
}
</style>
