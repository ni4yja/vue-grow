<script setup>
import { useUiStore } from '@/stores/ui.js';
import { storeToRefs } from 'pinia';

const uiStore = useUiStore();
const { isNavExpanded } = storeToRefs(uiStore);
</script>
<template>
  <main
    class="layout-main"
    :class="{
      'layout-main--collapsed': isNavExpanded,
    }"
  >
    <div class="layout-main--content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
.layout-main {
  padding: 24px 18px;
  grid-area: main;
  transition: all 0.3s ease;
}

.layout-main--collapsed {
  padding-left: 300px;
}

.layout-main--content {
  padding: 17px 18px 20px;
  border-radius: 16px;

  @media (min-width: 960px) {
    width: 800px;
  }
}
</style>
