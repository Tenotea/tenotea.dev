<template>
  <section id="pre_footer">
    <section class="content_box">
      <common-section-title>
        nEXt STePs
      </common-section-title>
      <div class="direction_grid">
        <div class="direction">
          <p class="title"> Get in touch </p>
        </div>
        <div class="direction">
          <p class="title"> About Me </p>
        </div>
        <div class="direction">
          <p class="title"> My Projects </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonSectionTitle from '../../common/CommonSectionTitle.vue'

export default defineComponent({
  components: { CommonSectionTitle },
  
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/home/prefooter.scss'
</style>
