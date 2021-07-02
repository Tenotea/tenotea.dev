<template>
  <div class="position-tracker">
    4/18
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as globals;
.position-tracker {
  padding: 5px 10px;
  border-radius: 300px;
  background: rgba($color: globals.$desaturated-yellow, $alpha: 0.1);
  max-width: max-content;
  font-weight: 500;
  font-size: 0.8em;
  color: globals.$desaturated-yellow;
}
</style>
