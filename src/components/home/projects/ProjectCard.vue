<template>
  <div class="project" :class="{ reverse: reverse }">
    <div class="project__information">
      <div class="project__information--left_pane" :style="{background: `linear-gradient(to right, #333646 88%, ${project.theme} 12%)` }">
        <div class="left_pane_container">
          <div class="header">
            <h1 class="header__title"> {{ project.name }} </h1>
            <a class="header__link" :href="project.url" target="_blank" noopener noreferrer>
              <!-- <app-icon icon="link" /> -->
              <span class="header__link--name"> {{ project.domainName }} </span>
            </a>
          </div>
          <p class="description">
            {{ project.metaDescription }}
          </p>
          <div class="stack_information">
            <app-icon size="1.3" icon="code-tags" />
            <div class="stack_information__stacks">
              <template v-for="(stack, index) in project.technologies.slice(0, 4)" :key="stack.id"> 
                <span class="stack"> {{ stack.name }} </span>
                <span class="delimiter" v-if="index < project.technologies.slice(0, 3).length "> + </span>
              </template>
            </div>
          </div>
          <a :href="project.url" target="_blank" class="link_action">
            <app-icon size="1" icon="open-in-new" />
            <span class="link_action__name"> Visit Site </span>
          </a>
          <router-link :to="`/projects/${project.id}`">
            <p class="view_action"> Learn more > </p>
          </router-link>
        </div>
      </div>
      <div class="project__information--right_pane">
        <div class="project_image" :style="{ backgroundImage: `url(${project.primaryImage.url})`}">
        </div>
        <div class="project_image" :style="{ backgroundImage: `url(${project.snapshots[0].url})`}">
        </div>
      </div>
    </div>
    <div class="position_indicator" :class="{ reversed: project.position === 2 }">
      <project-position-indicator :reverse="project.position === 2">
        0{{project.position}}
      </project-position-indicator>
    </div>
    <div class="bubble_compensation">
      <hero-bubble size="600" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PortfolioProject } from '../../../db/projects/projects'
import AppIcon from '../../common/AppIcon.vue'
import CommonSquareGrid from '../../common/CommonSquareGrid.vue'
import HeroBubble from '../hero/HeroBubble.vue'
import ProjectPositionIndicator from './ProjectPositionIndicator.vue'

export default defineComponent({
  components: { AppIcon, CommonSquareGrid, ProjectPositionIndicator, HeroBubble },
  props: {
    reverse: {
      type: Boolean
    },
    project: {
      type: Object as PropType<PortfolioProject>,
        required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/home/projects/ProjectCard.scss';
</style>
