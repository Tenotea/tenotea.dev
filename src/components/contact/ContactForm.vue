<template>
  <form @submit.prevent class="form">
    <h5 class="form__title"> Get in touch </h5>
    <div class="form__social_icons">
      <a v-for="platform in platforms" :key="platform.id" :href="platform.url" :title="platform.name" class="form__social_icons--links" :style="{ backgroundColor: platform.color }">
        <app-icon :icon="platform.icon" hover="white" size="1.8" />
      </a>
    </div>
    <p class="form__separator">
      OR
    </p>
    <div class="form__fields">
      <div class="form__field">
        <label for="email" class="form__field--label"> Email address </label>
        <div class="form__field--input">
          <div class="icon">
            <app-icon icon="gmail" size="1.5" />
          </div>
          <input type="email" autocomplete="email" class="text_box" placeholder="name@website.com">
        </div>
      </div>
      <div class="form__field">
        <label for="email" class="form__field--label"> Message </label>
        <textarea type="text" autocomplete="none" class="form__field--text_area" placeholder="Type in your message"></textarea>
      </div>
    </div>
    <button class="form__submit_action">
      Leave a Message
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SocialMedia } from '../app/SocialMedia.vue'
import AppIcon from '../common/AppIcon.vue'

export default defineComponent({
  components: { AppIcon },
  data: () => ({
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
    ] as SocialMedia[]
  })
})
</script>

<style lang="scss" scoped>
@import '../../styles/components/contact/ContactForm.scss' ;
</style>
