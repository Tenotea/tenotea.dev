<template>
  <section class="description-block">
    <h6 class="block-title">
      PRODUCTS Developed
    </h6>
    <div class="block-content">
      <p v-for="item in project.productsDeveloped" :key="item" class="block-content-item">
        - {{ item }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { PortfolioProject } from '../../db/projects/projects';

export default defineComponent({
  setup() {
    const project = <PortfolioProject> inject('currentProject')
    return {
      project
    }
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.description-block {
  max-width: 800px;
  .block-title {
    font-weight: 500;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-bottom: 8px;
    color: globals.$titleGray;
  }
  .block-content {
    color: globals.$desaturated-yellow;
    font-size: 0.9em;
    line-height: 2em;
    letter-spacing: 0.01em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
