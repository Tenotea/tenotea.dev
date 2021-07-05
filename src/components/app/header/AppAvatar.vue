<template>
  <router-link to="/"> 
    <div class="_avatar">
      <div class="app_avatar" ref="avatar"> </div>
      <p class="app_name">enotea </p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
  @import '../../../styles/components/app/header/AppAvatar.scss';
</style>
