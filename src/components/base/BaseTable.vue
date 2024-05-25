<script setup>
const props = defineProps({
  headerList: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<template>
  <div class="table">
    <div
      class="table-row"
      :class="{
        'table-row-header table-row--header':
          props.headerList,
      }"
    >
      <ul class="table-row-header-list">
        <li
          class="table-row-header-list-item"
          v-for="title in props.headerList"
          :key="title"
        >
          <span class="table-row-header-list-title">{{
            title
          }}</span>
        </li>
      </ul>
    </div>
    <div class="table-row">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.table-row {
  box-sizing: border-box;
}

.table-row--header {
  display: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    min-height: 64px;
    padding: 0 10px;
    background-color: var(--layout-surface-02);
  }
}

.table-row-header-list {
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    column-gap: 10px;
    width: 100%;
  }
}

.table-row-header-list-title {
  @media (min-width: 960px) {
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
