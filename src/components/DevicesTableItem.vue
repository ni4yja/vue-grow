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
const deviceTagsList = computed(() =>
  device.value.tags.split(','),
);

const cellularDataUsage = computed(
  () =>
    device.value.stats?.current_month?.data_volume?.total,
);
const satelliteDataUsage = computed(
  () =>
    device.value.stats?.current_month?.sat_geo_data_volume
      ?.total,
);

const deviceCellInfo = computed(() => {
  return [
    {
      title: device.value.name,
      content: device.value.tags,
      hasTags: true,
    },
    {
      title: 'Status',
      content: device.value.status?.description || '',
      hasTags: false,
    },
    {
      title: 'Cellular usage',
      content: cellularDataUsage.value || 'no usage',
      hasTags: false,
    },
    {
      title: 'Satellite usage',
      content: satelliteDataUsage.value || 'no usage',
      hasTags: false,
    },
  ];
});
</script>

<template>
  <BaseTableItem class="devices-table-item">
    <BaseTableCell
      v-for="cell in deviceCellInfo"
      :key="cell.title"
      :title="cell.title"
      :content="cell.content"
    >
      <template #tags v-if="cell.hasTags && device.tags">
        <ul class="devices-table-item__tags-list">
          <li v-for="tag in deviceTagsList" :key="tag">
            <span class="devices-table-item__tags-item">{{
              tag
            }}</span>
          </li>
        </ul>
      </template>
    </BaseTableCell>
  </BaseTableItem>
</template>

<style scoped>
.devices-table-item__tags-item {
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  margin-right: 4px;
  border-radius: 4px;
}
</style>
