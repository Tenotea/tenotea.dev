<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__left-pane">
        <h5 class="top-caption"> Hi! I'm </h5>
        <div class="name-container">
          <h1 class="name">
            Tenotea
          </h1>
          <div class="square-grid">
            <span v-for="n in 20" :key="n" :class="`tarmac __${n}`" ></span>
          </div>
        </div>
        <p class="bottom-caption">
          <!-- Creating solutions with my programming abilities -->
          A fullstack web engineer
        </p>

        <div class="stack-icons">
          <img v-for="stackIcon in stackIcons" :key="stackIcon.id" class="stack-icons__icon" :src="stackIcon.asset" :alt="stackIcon.name">
        </div>

        <div class="actions">
          <router-link to="/projects">
            <button class="action filled">
              Projects
            </button>
          </router-link>
          <router-link to="/contact">
            <button class="action outlined">
              Contact
            </button>
          </router-link>
        </div>
      </div>

      <div class="hero__right-pane">
        <div class="image_container">
        </div>
      </div>
    </div>
    <hero-bubbles />
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../../common/AppIcon.vue'
import HeroBubbles from './HeroBubbles.vue'
import vuejsIcon from '../../../assets/icons/vuejs.svg'
import reactjsIcon from '../../../assets/icons/reactjs.svg'
import nuxtjsIcon from '../../../assets/icons/nuxtjs.svg'
import nodejsIcon from '../../../assets/icons/nodejs.svg'

interface StackIcon {
  id: number,
  name: string
  asset: string
}

export default defineComponent({
  components: {
    AppIcon,
    HeroBubbles
  },

  data: () => ({
    stackIcons: [
      {
        id: 1,
        name: 'vue.js',
        asset: vuejsIcon
      },
      {
        id: 2,
        name: 'react.js',
        asset: reactjsIcon
      },
      {
        id: 0,
        name: 'nuxt.js',
        asset: nuxtjsIcon
      },
      {
        id: 3,
        name: 'node.js',
        asset: nodejsIcon
      }
    ] as StackIcon[]
  })
})
</script>

<style scoped lang="scss">
  @import '../../../styles/components/home/hero.scss';
</style>
