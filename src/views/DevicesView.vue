<script setup>
import { ref } from 'vue';
import { fetchDevices } from '@/services/devicesService.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import BaseButton from '@/components/base/BaseButton.vue';
import LayoutMain from '../components/LayoutMain.vue';

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
</script>
<template>
  <LayoutMain
    ><div>
      <h1>Connected Devices</h1>
      <BaseButton @click="handleFetchDevices" label="Fetch Devices" />
      <ul>
        <li v-for="device in connectedDevices" :key="device.id">{{ device.name }}</li>
      </ul>
    </div></LayoutMain
  >
</template>

<style scoped>
/* Component CSS here */
</style>
