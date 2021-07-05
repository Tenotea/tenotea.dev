<template>
  <section>
    <hero />
    <skills />
    <projects />
    <!-- <about /> -->
    <!-- <pre-footer /> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '../components/app/AppHeader.vue'
import About from '../components/home/about/About.vue'
import Hero from '../components/home/hero/Hero.vue'
import PreFooter from '../components/home/prefooter/PreFooter.vue'
import Projects from '../components/home/projects/Projects.vue'
import Skills from '../components/home/skills/Skills.vue'

export default defineComponent({
  components: { AppHeader, Hero, Skills, Projects, About, PreFooter },
  
})
</script>

<style lang="scss" scoped>
  @import '../styles/pages/home.scss';
</style>
