<template>
  <main>
    <div class="content_box" >
      <div class="content_box__section_grid">
        <div class="left_pane">
          <h1 class="left_pane__heading"> I'd love to <br> hear from you </h1>
          <p class="left_pane__contact_response">
            Thank you for contacting me :)
          </p>
          <div class="action">
            <button class="action__filled">
              My Projects
            </button>
            <router-link to="/" class="action__outlined">
              Home
            </router-link>
          </div>
        </div>
        <div class="right_pane">
          <contact-form />
        </div>
      </div>
    </div>
    <div class="floaters one">
      <hero-bubble size="600" gradient="linear-gradient(45deg, rgb(45 91 117), rgb(154 69 35 / 45%))" />
    </div>
    <div class="floaters two">
      <hero-bubble size="500" gradient="linear-gradient(45deg, rgb(24 92 173 / 16%), rgb(26 132 44 / 16%))" />
    </div>
    <div class="floaters three">
      <hero-bubble size="400" gradient="linear-gradient(45deg, rgba(37, 39, 52, 0), rgb(70 55 51 / 70%))" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from '../components/contact/ContactForm.vue'
import HeroBubble from '../components/home/hero/HeroBubble.vue'

export default defineComponent({
  components: { ContactForm, HeroBubble },
  setup() {
 
    HeroBubble   
  },
})
</script>

<style lang="scss" scoped>
@import '../styles/pages/contact.scss';
</style>
