<template>
  <div class="_avatar">
    <div class="app_avatar" ref="avatar"> </div>
    <p class="app_name">enotea </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap, { Power3 } from 'gsap'

export default defineComponent({
  mounted () {
    const avatar = <HTMLDivElement> this.$refs.avatar
    // gsap.fromTo(avatar, {
    //   rotateY: 0
    // }, {
    //   rotateY: 360,
    //   duration: 10,
    //   repeat: Infinity,
    //   ease: Power3.easeInOut
    // })
  }
})
</script>

<style lang="scss" scoped>
  @import '../../../styles/components/app/header/AppAvatar.scss';
</style>
