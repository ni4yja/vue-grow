<script setup>
import { ref } from 'vue';
import { fetchDevices } from '@/services/devicesService.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import BaseButton from '@/components/base/BaseButton.vue';
import LayoutMain from '@/components/LayoutMain.vue';
import BaseTable from '@/components/base/BaseTable.vue';

const authenticationStore = useAuthenticationStore();
const { stopAuthenticationProcess } = authenticationStore;

const connectedDevices = ref([]);

async function handleFetchDevices() {
  try {
    connectedDevices.value = await fetchDevices({
      filter: { and: [], or: [] },
      page: 1,
      per_page: 5,
      sorting: [],
    });
  } catch (error) {
    stopAuthenticationProcess();
    console.error('Failed to fetch devices:', error);
  }
}

const columns = ref([
  { field: 'name', label: 'Name' },
  { field: 'id', label: 'ID' },
]);
</script>

<template>
  <LayoutMain>
    <div class="devices-view--actions">
      <h1>Connected Devices</h1>
      <BaseButton @click="handleFetchDevices" label="Fetch Devices" />
    </div>
    <BaseTable :items="connectedDevices" :columns="columns">
      <template #name="{ item }">
        <span>{{ item.name }}</span>
      </template>
    </BaseTable>
  </LayoutMain>
</template>

<style scoped>
.devices-view--actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}
</style>
