<script setup>
import BaseTableItem from '@/components/base/BaseTableItem.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="table">
    <BaseTableItem
      v-for="device in props.items"
      :key="device.id"
      :item="device"
    />
  </div>
</template>

<style scoped></style>
