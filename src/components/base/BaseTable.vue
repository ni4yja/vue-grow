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
}));
</script>

<template>
  <div class="table" :style="gridStyle">
    <div class="table-header" v-for="column in columns" :key="column.field" :style="columnStyle">
      {{ column.label }}
    </div>
    <div v-for="item in items" :key="item.id" class="table-row">
      <div class="table-cell" v-for="column in columns" :key="column.field" :style="columnStyle">
        <slot :name="column.field" :item="item">
          {{ item[column.field] }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/styles/variables.css" />
<style scoped>
.table {
  display: grid;
  margin-bottom: 2rem;
}

.table-header,
.table-cell {
  padding: 0.5rem;
  text-align: left;
}

.table-header {
  background-color: var(--layout-surface-02);
  border-bottom: 2px solid #000;
  font-weight: bold;
}

.table-cell {
  border-bottom: 1px dashed #000;
}

.table-row {
  display: contents;
}
</style>
