<template>
  <header id="header" class="app_header">
    <div class="app_header__blurred" />
    <div class="app_header__container">
      <app-avatar />
      <app-hamburger @openNavigation="openNavigation" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppAvatar from './header/AppAvatar.vue'
import AppHamburger from './header/AppHamburger.vue'

export default defineComponent({
  components: { AppAvatar, AppHamburger },
  emits: ['openNavigation'],
  methods: {
    openNavigation () {
      this.$emit('openNavigation')
    }
  }
})
</script>


<style lang="scss" scoped>
  @import '../../styles/components/app/AppHeader.scss';
</style>
