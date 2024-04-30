import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { fetchDevices } from '@/services/devicesService.js';

export const useDevicesStore = defineStore('devices', () => {
  const devicesList = ref(useLocalStorage('devicesList', []));
  const fetchErrorMessage = ref();

  async function setDevicesList() {
    try {
      devicesList.value = await fetchDevices({
        filter: { and: [], or: [] },
        page: 1,
        per_page: 5,
        sorting: [],
      });
    } catch (error) {
      fetchErrorMessage.value = `Failed to fetch devices because of ${error}`;
    }
  }

  return {
    devicesList,
    fetchErrorMessage,
    setDevicesList,
  };
});
