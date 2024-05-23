<script setup>
import BaseTable from '@/components/base/BaseTable.vue';
import DevicesTableItem from '@/components/DevicesTableItem.vue';

const props = defineProps({
  devices: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <BaseTable>
    <DevicesTableItem
      v-for="device in devices"
      :key="device.id"
      :device="device"
    />
  </BaseTable>
</template>

<style scoped>
/* Component CSS here */
</style>
