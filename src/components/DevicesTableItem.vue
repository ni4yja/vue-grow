<script setup>
import { computed, toRefs } from 'vue';
import BaseTableItem from '@/components/base/BaseTableItem.vue';
import BaseTableCell from '@/components/base/BaseTableCell.vue';

const props = defineProps({
  device: {
    type: Object,
    required: true,
  },
});

const { device } = toRefs(props);

const deviceCellInfo = computed(() => {
  return [
    {
      name: '',
      content: device.value.name,
    },
    {
      name: '',
      content: device.value.tags,
    },
  ];
});
</script>
<template>
  <BaseTableItem>
    <BaseTableCell
      v-for="cell in deviceCellInfo"
      :name="cell.name"
      :content="cell.content"
    ></BaseTableCell>
  </BaseTableItem>
</template>

<style scoped>
/* Component CSS here */
</style>
