<template>
  <div id="main">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/app/AppHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  }
})
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>
