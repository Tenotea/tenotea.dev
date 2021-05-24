<template>
  <teleport to="body">
    <section :class="`navigation_body ${active ? 'open' : 'close'}`">
      <section class="curtains">
        <div v-for="n in 5" :key="n" :class="`curtain position_${n}`"></div>
      </section>
      <div class="navigation_container">
        <div class="navigation_header">
          <app-avatar />
          <div class="navigation_header__exit">
            <app-icon icon="close" size="2.3" hover="orange" @click="exitNavigation" />
          </div>
        </div>
        <div class="navigation_options">
          <router-link v-for="navLink in navLinks" class="navigation_options__option" :key="navLink.id"  :to="navLink.path" @click="exitNavigation">
            <div class="navigation_options__option--icon">
            </div>
              <div class="navigation_options__option--name">
                {{ navLink.name }}
              </div>
          </router-link>
        </div>
        <div class="social_media">
          <a v-for="platform in platforms" ref="socialMediaIcon" :key="platform.id" target="_blank" :href="platform.url" rel="noopener noreferrer" :title="platform.name">
          <app-icon class="icon" :icon="platform.icon" size="1.9" :hover="platform.color" />
        </a>
        </div>
      </div>
    </section>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '../common/AppIcon.vue'
import AppAvatar from './header/AppAvatar.vue'
import SocialMedia, { SocialMedia as SocialMediaInterface } from './SocialMedia.vue'

interface NavLink {
  id: number,
  name: string,
  path: string
}

export default defineComponent({
  components: { AppIcon, AppAvatar, SocialMedia },
  emits: ['exitNavigation'],

  props: {
    active: {
      type: Boolean
    }
  },

  data: () => ({
    navLinks: [
      {
        id: 1,
        name: 'Home',
        path: '/'
      },
      {
        id: 2,
        name: 'Experience',
        path: '/experience'
      },
      {
        id: 3,
        name: 'About Me',
        path: '/me'
      },
      {
        id: 4,
        name: 'Projects',
        path: '/projects'
      },
      {
        id: 5,
        name: 'Get in touch',
        path: '/get-in-touch'
      }
    ] as NavLink[],

    platforms: [
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
    ] as SocialMediaInterface[]
  }),

  methods: {
    exitNavigation () {
      this.$emit('exitNavigation')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/components/app/AppNavigationAlt.scss';
</style>
