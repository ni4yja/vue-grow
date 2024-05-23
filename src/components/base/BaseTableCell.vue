<script setup>
import { useSlots } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String, Number, Object],
    required: true,
  },
});

const slots = useSlots();
</script>

<template>
  <div class="table-cell">
    <div class="table-cell__title">{{ props.title }}</div>
    <div
      v-if="slots.tags"
      class="table-cell__content table-cell__content--tags"
    >
      <slot name="tags">{{ props.content }}</slot>
    </div>
    <div
      v-else
      class="table-cell__content table-cell__content--description"
    >
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.table-cell {
  padding: 16px 8px;
  border-bottom: 1px solid #ddd;
}
</style>
