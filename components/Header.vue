<template>
  <header class="header-wrapper">
    <slot />
  </header>
</template>

<script setup lang="ts">
// Header组件的插槽包装器
</script>

<style scoped>
.header-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>