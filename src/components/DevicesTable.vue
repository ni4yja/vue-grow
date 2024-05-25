<script setup>
import BaseTable from '@/components/base/BaseTable.vue';
import DevicesTableItem from '@/components/DevicesTableItem.vue';

const props = defineProps({
  devices: {
    type: Array,
    required: true,
  },
});

const devicesHeaderList = [
  'Name',
  'Status',
  'Connection',
  'Cellular usage',
  'Satellite usage',
];
</script>
<template>
  <BaseTable :header-list="devicesHeaderList">
    <DevicesTableItem
      v-for="device in props.devices"
      :key="device.id"
      :device="device"
    />
  </BaseTable>
</template>
