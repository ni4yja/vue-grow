<script setup>
import { useUiStore } from '@/stores/ui.js';
import { storeToRefs } from 'pinia';
import BaseIcon from '@/components/base/BaseIcon.vue';

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
      <li class="layout-nav-bar__item">
        <RouterLink to="/" class="layout-nav-bar__link">
          <BaseIcon name="house" class="layout-nav-bar__icon" />
          <span class="layout-nav-bar__text">Dashboard</span>
        </RouterLink>
      </li>
      <li class="layout-nav-bar__item">
        <RouterLink to="/devices" class="layout-nav-bar__link">
          <BaseIcon name="logo-draw-io" class="layout-nav-bar__icon" />
          <span class="layout-nav-bar__text">Devices</span>
        </RouterLink>
      </li>
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
}

.layout-nav-bar--expanded {
  z-index: 1;
  width: 300px;
  transition: width 0.3s ease;

  .layout-nav-bar__item {
    width: 100%;
    box-sizing: border-box;
    padding-right: 20px;
  }

  .layout-nav-bar__link {
    gap: 15px;
    width: inherit;
    padding: 7px 5px 7px 17px;
    border-radius: 0 8px 8px 0;
    text-decoration: none;
  }

  .layout-nav-bar__text {
    display: block;
    font-weight: 600;
    color: #000000;
  }
}
.layout-nav-bar__list {
  margin: 0;
  margin-top: 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.layout-nav-bar__item {
  list-style: none;
  display: block;
}

.layout-nav-bar__link {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 35px;
  padding: 7px;
  border-radius: 8px;
}

.router-link-exact-active {
  background-color: var(--primary-02);
}

.layout-nav-bar__text {
  display: none;
}
</style>
