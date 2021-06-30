<template>
  <main>
    <div class="about-page-container">
      <about-title-styled />
      <about-page-header />
      <about-page-paragraph>
        My name is Adelakun Emmanuel, but I prefer being addressed as Tenotea. I am currently a 200Level student of Obafemi Awolowo University studying for a BSc. Computer Science and Engineering. 
      </about-page-paragraph>
      <about-page-image />
      <about-page-paragraph>
        I am a fullstack web engineer and unlike web engineers that focus on one area either frontend or backend engineering, I have a responsibility to subject myself to different ideas, technologies that are far from what I would call Comfortable. With this, I am able to see new technologies, ideas from an open-minded perspective making me a better learner and team member. 
      </about-page-paragraph>
      <about-page-paragraph>
        I am a web engineer who has learnt web development for the past two years by making a lot of mistakes and also receiving quite a number of critics and encouragement. I have participated in Hackathons and have helped two Real businesses establish their online presence.
      </about-page-paragraph>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutPageHeader from '../components/about/AboutPageHeader.vue'
import AboutTitleStyled from '../components/about/AboutTitleStyled.vue'
import AboutPageParagraph from '../components/about/AboutPageParagraph.vue';
import AboutPageImage from '../components/about/AboutPageImage.vue';

export default defineComponent({
  components: { AboutTitleStyled, AboutPageHeader, AboutPageParagraph, AboutPageImage },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/pages/about.scss';
</style>
