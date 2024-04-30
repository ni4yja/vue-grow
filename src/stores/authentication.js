import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { authenticate } from '@/services/authService';

export const useAuthenticationStore = defineStore('authentication', () => {
  const authToken = ref(useLocalStorage('authToken', ''));
  const isAuthenticationSuccessful = ref(useLocalStorage('isAuthenticationSuccessful', null));
  const authErrorMessage = ref('');

  function setAuthToken(authTokenValue) {
    authToken.value = authTokenValue;
  }

  async function handleAuthentication(appTokenValue) {
    try {
      const data = await authenticate(appTokenValue);
      setAuthToken(data.auth_token);
      isAuthenticationSuccessful.value = true;
    } catch (error) {
      authErrorMessage.value = `Authentication failed because of ${error}`;
      isAuthenticationSuccessful.value = false;
    }
  }

  return {
    isAuthenticationSuccessful,
    authErrorMessage,
    handleAuthentication,
  };
});
