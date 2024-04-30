<script setup>
import LayoutHeader from '@/components/LayoutHeader.vue';
import LayoutNavBar from '@/components/LayoutNavBar.vue';
</script>

<template>
  <div class="root-page">
    <LayoutHeader />
    <LayoutNavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.root-page {
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: 60px 3fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
}
</style>
