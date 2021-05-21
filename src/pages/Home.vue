<template>
  <section>
    <hero />
    <skills />
    <projects />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '../components/app/AppHeader.vue'
import Hero from '../components/home/hero/Hero.vue'
import Projects from '../components/home/projects/Projects.vue'
import Skills from '../components/home/skills/Skills.vue'

export default defineComponent({
  components: { AppHeader, Hero, Skills, Projects },
  
})
</script>

<style lang="scss" scoped>
  @import '../styles/pages/home.scss';
</style>
