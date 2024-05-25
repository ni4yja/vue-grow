<script setup></script>

<template>
  <div class="table-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.table-item {
  box-sizing: border-box;
  padding: 24px 16px 24px 36px;
  border: 1px solid var(--layout-surface-03);
  margin-bottom: 8px;

  @media (min-width: 960px) {
    padding: 8px 10px;
    margin-bottom: -1px;
  }
}
</style>
