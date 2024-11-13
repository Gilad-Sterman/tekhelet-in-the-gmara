<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
</style>
