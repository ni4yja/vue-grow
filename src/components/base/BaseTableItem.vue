<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const cellularDataUsage = computed(
  () =>
    props.item?.stats?.current_month?.data_volume?.total,
);
const satelliteDataUsage = computed(
  () =>
    props.item?.stats?.current_month?.sat_geo_data_volume
      ?.total,
);
</script>

<template>
  <div :key="item.id" class="table-item">
    <div
      class="table-item__column table-item__column--name"
    >
      {{ item.name }} {{ item.tags }}
    </div>
    <div
      class="table-item__column table-item__column--status"
    >
      {{ item.status?.description }}
    </div>
    <div
      class="table-item__column table-item__column--connection"
    >
      {{ item.connectivity?.status }}
    </div>
    <div
      class="table-item__column table-item__column--cellular"
    >
      {{ cellularDataUsage || 'no usage' }}
    </div>
    <div
      class="table-item__column table-item__column--satellite"
    >
      {{ satelliteDataUsage || 'no usage' }}
    </div>
    <div
      class="table-item__column table-item__column--action"
    ></div>
  </div>
</template>

<style scoped>
.table-item {
  padding: 24px 16px;
  border: 1px solid #cdcdcd;
  margin-bottom: 8px;
}
</style>
