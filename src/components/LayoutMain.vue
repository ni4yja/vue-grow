<script setup>
import LayoutHeader from '@/components/LayoutHeader.vue';
import LayoutNavBar from '@/components/LayoutNavBar.vue';

import { useUiStore } from '@/stores/ui.js';
import { storeToRefs } from 'pinia';

const uiStore = useUiStore();
const { isNavExpanded } = storeToRefs(uiStore);
</script>

<template>
  <div
    :class="[
      'layout-main',
      { 'layout-main--shrink': !isNavExpanded },
    ]"
  >
    <LayoutHeader />
    <LayoutNavBar />
    <RouterView />
  </div>
</template>

<style src="@/assets/styles/variables.css" />
<style scoped>
.layout-main {
  position: relative;
  display: grid;
  grid-template-rows: (var(--header-height-fixed)) 1fr;
  grid-template-columns: var(--sidebar-width-collapsed) auto;
  grid-template-areas:
    'header header'
    'sidebar content';
  transition: grid-template-columns 0.3s ease;

  @media (min-width: 960px) {
    grid-template-columns: var(--sidebar-width-expanded) auto;
  }
}

.layout-main--shrink {
  grid-template-columns: var(--sidebar-width-collapsed) auto;
}
</style>
