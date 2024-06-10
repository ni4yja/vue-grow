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

function refresh(deviceName, deviceId) {
  console.log(
    `Refresh clicked for device ${deviceName} with ID ${deviceId}`,
  );
}

function cancel(deviceName, deviceId) {
  console.log(
    `Cancel clicked for device ${deviceName} with ID ${deviceId}`,
  );
}

function message(deviceName, deviceId) {
  console.log(
    `Message clicked for device ${deviceName} with ID ${deviceId}`,
  );
}

function handleButtonClick(action, device) {
  action(device.name, device.id);
}

const deviceTagsList = computed(() => {
  return device.value.tags
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '');
});

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
      content: [
        { icon: 'refresh', action: refresh },
        { icon: 'cancel', action: cancel },
        { icon: 'message', action: message },
      ],
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
          v-for="button in cell.content"
          :key="button.icon"
          :icon="button.icon"
          @click="handleButtonClick(button.action, device)"
          view="secondary"
        />
      </div>
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

  &:hover {
    @media (min-width: 960px) {
      box-shadow: 0 3px 3px -3px var(--layout-surface-03);

      .devices-table-item__actions {
        visibility: visible;
      }
    }
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

  @media (min-width: 960px) {
    justify-content: flex-end;
    visibility: hidden;
  }
}
</style>
