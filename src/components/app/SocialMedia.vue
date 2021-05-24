<template>
  <div class="social_platforms">
    <div class="social_platforms__icons" ref="socialMedia">
      <a v-for="platform in platforms" ref="socialMediaIcon" :key="platform.id" target="_blank" :href="platform.url" rel="noopener noreferrer" :title="platform.name">
        <app-icon class="icon" :icon="platform.icon" size="1.5" :hover="platform.color" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap, { Elastic } from 'gsap'
import AppIcon from '../common/AppIcon.vue'

export interface SocialMedia {
  id: number,
  icon: string,
  name: string,
  url: string,
  color: string
}

export const socialMediaPlatforms: SocialMedia[] = [
  {
    id: 1,
    icon: 'github',
    name: 'Github',
    url: 'https://github.com/tenotea',
    color: '#171515'
  },
  {
    id: 2,
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/drtenotea',
    color: '#1DA1F2'
  },
  {
    id: 3,
    icon: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adelakun-emmanuel',
    color: '#0072b1'
  },
  {
    id: 4,
    icon: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/%2B2347065362672',
    color: '#25D366'
  }
] 

export default defineComponent({
  components: { AppIcon },
  data: () => ({
    platforms: socialMediaPlatforms
  }),

  mounted () {
    const mediaIcons = <HTMLDivElement> this.$refs.socialMedia
    const iconLinks = []
    for (let i = 0; i < mediaIcons.children.length; i++)
      iconLinks.push(mediaIcons.children.item(i))
    gsap.fromTo(mediaIcons, {
      x: -100
    }, {
      x: 0,
      duration: 0.8,
      ease: Elastic.easeOut
    })
  }
})
</script>

<style scoped lang="scss">
  @import '../../styles/components/app/SocialMedia.scss'
</style>
