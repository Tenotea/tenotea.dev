<template>
  <header id="header" class="app_header">
    <div class="app_header__blurred" />
    <div class="app_header__container">
      <app-avatar />
      <app-hamburger />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vaniallaTilt from 'vanilla-tilt'
import AppAvatar from './header/AppAvatar.vue'
import AppHamburger from './header/AppHamburger.vue'

export default defineComponent({
  components: { AppAvatar, AppHamburger },
  setup() {
    
  },
})
</script>


<style lang="scss" scoped>
  @import '../../styles/components/app/AppHeader.scss';
</style>
