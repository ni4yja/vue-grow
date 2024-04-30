<script setup>
import { ref } from 'vue';
import { useDevicesStore } from '@/stores/devices.js';
import { storeToRefs } from 'pinia';
import BaseButton from '@/components/base/BaseButton.vue';
import LayoutMain from '@/components/LayoutMain.vue';
import BaseTable from '@/components/base/BaseTable.vue';

const devicesStore = useDevicesStore();
const { devicesList } = storeToRefs(devicesStore);
const { setDevicesList } = devicesStore;

const columns = ref([
  { field: 'name', label: 'Name' },
  { field: 'id', label: 'ID' },
  { field: 'status', label: 'Status' },
]);
</script>

<template>
  <LayoutMain>
    <div class="devices-view--actions">
      <h2 class="devices-view--title">Connected Devices</h2>
      <BaseButton @click="setDevicesList" class="devices-view--button" label="Fetch Devices" />
    </div>
    <BaseTable :items="devicesList" :columns="columns">
      <template #name="{ item }">
        <span>{{ item.name }}</span>
      </template>
      <template #id="{ item }">
        <span>{{ item.id }}</span>
      </template>
      <template #status="{ item }">
        <span>{{ item.status.description }}</span>
      </template>
    </BaseTable>
  </LayoutMain>
</template>

<style scoped>
.devices-view--actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.devices-view--title {
  font-size: 1.6rem;
}

.devices-view--button {
  flex: 1;
  width: 100%;

  @media (min-width: 960px) {
    flex: initial;
    width: fit-content;
  }
}
</style>
