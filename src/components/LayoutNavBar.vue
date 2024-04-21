<script setup></script>
<template>
  <aside class="layout-nav-bar">
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
  grid-area: sidebar;
  background-color: var(--layout-surface-02);
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
