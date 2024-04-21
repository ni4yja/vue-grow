import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useAuthenticationStore = defineStore('authentication', () => {
  const authToken = ref(useLocalStorage('authToken', ''));
  const isAuthenticationSuccessful = ref(useLocalStorage('isAuthenticationSuccessful', null));

  function setAuthToken(tokenValue) {
    authToken.value = tokenValue;
  }

  function completeAuthenticationProcess() {
    isAuthenticationSuccessful.value = true;
  }

  function stopAuthenticationProcess() {
    isAuthenticationSuccessful.value = false;
  }

  return {
    isAuthenticationSuccessful,
    setAuthToken,
    completeAuthenticationProcess,
    stopAuthenticationProcess,
  };
});
