<template>
  <section id="about">
    <div class="container">
      <common-section-title>
        About Me
      </common-section-title>
      <div class="content_box">
        <article class="article">
          <p class="paragraph">
            Hello! I'm <span class="highlight" style="color: rgb(80, 255, 179);"> Adelakun Emmanuel </span> call me <span class="highlight" style="color: rgb(255, 220, 80);"> Tenotea </span>  if you please. I am a computer science and engineering student as well as a fullstack web engineer.
          </p>
          <p class="paragraph">
            Unlike a number web engineers that focus on frontend or backend only, I have a responsibility to subject myself to different fun ideas, tools and technologies that can be sometimes frustrating. Notwithstanding, I have been able to expose myself to new environments from an open-minded perspective.
          </p>
          <p class="paragraph">
            For the past two years, I have learnt web development as a means to increase my problem solving abilities and I am glad I have a chance at making an impact in the new world.
          </p>
          <button class="action">
            <app-icon icon="work" />
            <span class="label">
              Get in touch
            </span>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../../common/AppIcon.vue'
import CommonSectionTitle from '../../common/CommonSectionTitle.vue'

export default defineComponent({
  components: { CommonSectionTitle, AppIcon },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/home/about.scss';
</style>

