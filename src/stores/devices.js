import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { fetchDevices } from '@/services/devicesService.js';
import { useAuthenticationStore } from '@/stores/authentication.js';

export const useDevicesStore = defineStore('devices', () => {
  const devicesList = ref(useLocalStorage('devicesList', []));

  async function setDevicesList() {
    const authenticationStore = useAuthenticationStore();
    const { stopAuthenticationProcess } = authenticationStore;
    try {
      devicesList.value = await fetchDevices({
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

  return {
    devicesList,
    setDevicesList,
  };
});
