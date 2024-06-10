import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchDevices } from '@/services/devicesService.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { storeToRefs } from 'pinia';

export const useDevicesStore = defineStore(
  'devices',
  () => {
    const devicesList = ref([]);
    const fetchErrorMessage = ref('');

    const authenticationStore = useAuthenticationStore();
    const { isAuthenticationSuccessful } = storeToRefs(
      authenticationStore,
    );

    async function setDevicesList() {
      if (isAuthenticationSuccessful.value) {
        try {
          devicesList.value = await fetchDevices({
            filter: { and: [], or: [] },
            page: 1,
            per_page: 10,
            sorting: [],
          });
          fetchErrorMessage.value = '';
        } catch (error) {
          fetchErrorMessage.value = `Failed to fetch devices because of ${error}`;
        }
      }
    }

    return {
      devicesList,
      fetchErrorMessage,
      setDevicesList,
    };
  },
);
