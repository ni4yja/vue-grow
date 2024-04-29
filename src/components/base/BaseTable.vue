<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});

const columnStyle = computed(() => ({
  'grid-template-columns': `repeat(${props.columns.length}, 1fr)`,
}));

const gridStyle = computed(() => ({
  display: 'grid',
  'grid-template-columns': `repeat(${props.columns.length}, 1fr)`,
  'row-gap': '1rem',
}));
</script>

<template>
  <div class="grid-table" :style="gridStyle">
    <div class="grid-header" v-for="column in columns" :key="column.field" :style="columnStyle">
      {{ column.label }}
    </div>
    <div v-for="item in items" :key="item.id" class="grid-row">
      <div class="grid-cell" v-for="column in columns" :key="column.field" :style="columnStyle">
        <slot :name="column.field" :item="item">
          {{ item[column.field] }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-table {
  display: grid;
}

.grid-header,
.grid-cell {
  padding: 0.5rem;
  text-align: left;
}

.grid-header {
  border-bottom: 2px solid #000;
}

.grid-cell {
  border-bottom: 1px dashed #000;
}

.grid-header {
  font-weight: bold;
}

.grid-row {
  display: contents;
}
</style>
