import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { authenticate } from '@/services/authService';
import { useDevicesStore } from '@/stores/devices.js';
import { storeToRefs } from 'pinia';

export const useAuthenticationStore = defineStore(
  'authentication',
  () => {
    const authToken = ref(useLocalStorage('authToken', ''));
    const authTokenExpiry = ref(
      useLocalStorage('authTokenExpiry', ''),
    );
    const isAuthenticationSuccessful = ref(
      useLocalStorage('isAuthenticationSuccessful', false),
    );
    const authErrorMessage = ref('');

    function setAuthToken(authTokenValue) {
      authToken.value = authTokenValue;
      const expiryTime = new Date();
      expiryTime.setMinutes(expiryTime.getMinutes() + 60);
      authTokenExpiry.value = expiryTime.toISOString();
    }

    async function handleAuthentication(appTokenValue) {
      const devicesStore = useDevicesStore();
      const { fetchErrorMessage } =
        storeToRefs(devicesStore);
      try {
        const data = await authenticate(appTokenValue);
        setAuthToken(data.auth_token);
        isAuthenticationSuccessful.value = true;
        authErrorMessage.value = '';
        fetchErrorMessage.value = '';
      } catch (error) {
        authErrorMessage.value = `Authentication failed because of ${error}`;
        isAuthenticationSuccessful.value = false;
      }
    }

    function clearAuthToken() {
      authToken.value = null;
      authTokenExpiry.value = null;
      isAuthenticationSuccessful.value = false;
      authErrorMessage.value =
        'Your token has axpired. Please, log in again.';
    }

    return {
      authToken,
      authTokenExpiry,
      isAuthenticationSuccessful,
      authErrorMessage,
      handleAuthentication,
      clearAuthToken,
    };
  },
);
