<script setup>
import { useUiStore } from '@/stores/ui.js';
import { storeToRefs } from 'pinia';

const uiStore = useUiStore();
const { isNavExpanded } = storeToRefs(uiStore);
</script>
<template>
  <aside
    class="layout-nav-bar"
    :class="{
      'layout-nav-bar--expanded': isNavExpanded,
    }"
  >
    <ul class="layout-nav-bar__list">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
    </ul>
  </aside>
</template>

<style src="@/assets/styles/variables.css" />
<style scoped>
.layout-nav-bar {
  width: 60px;
  grid-area: sidebar;
  background-color: var(--layout-surface-02);
  position: fixed;
  height: 100%;
  padding-top: 60px;
  transition: all 0.5s ease;
}

.layout-nav-bar--expanded {
  width: 300px;
  transition: width 0.3s ease;
}
.layout-nav-bar__list {
  margin: 0;
  margin-top: 16px;
  padding: 0;
}

li {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
