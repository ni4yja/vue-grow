<script setup>
import { computed, toRefs } from 'vue';
import BaseTableItem from '@/components/base/BaseTableItem.vue';
import BaseTableCell from '@/components/base/BaseTableCell.vue';
import BaseButton from '@/components/base/BaseButton.vue';

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
      hasActions: false,
    },
    {
      title: 'Status',
      content: device.value.status?.description || '',
      hasTags: false,
      hasActions: false,
    },
    {
      title: 'Connection',
      content: device.value.connectivity?.status || '',
      hasTags: false,
      hasActions: false,
    },
    {
      title: 'Cellular usage',
      content: cellularDataUsage.value || 'no usage',
      hasTags: false,
      hasActions: false,
    },
    {
      title: 'Satellite usage',
      content: satelliteDataUsage.value || 'no usage',
      hasTags: false,
      hasActions: false,
    },
    {
      title: '',
      content: ['refresh', 'cancel', 'message'],
      hasTags: false,
      hasActions: true,
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
      class="devices-table-cell"
    >
      <template
        v-if="cell.hasTags || cell.hasActions"
        #custom
      >
        <ul
          v-if="cell.hasTags"
          class="devices-table-item__tags-list"
        >
          <li
            class="devices-table-item__tags-list-item"
            v-for="tag in deviceTagsList"
            :key="tag"
          >
            <span class="devices-table-item__tag">{{
              tag
            }}</span>
          </li>
        </ul>
        <div
          v-if="cell.hasActions"
          class="devices-table-item__actions"
        >
          <BaseButton
            v-for="icon in cell.content"
            :key="icon"
            :icon="icon"
            view="secondary"
          />
        </div>
      </template>
    </BaseTableCell>
  </BaseTableItem>
</template>

<style scoped>
.devices-table-item {
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    column-gap: 10px;
  }
}

.devices-table-item__tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}

.devices-table-item__tag {
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--primary-03);
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-flex;
  margin-bottom: 4px;
}

.devices-table-item__actions {
  display: flex;
  gap: 4px;
}
</style>
