import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const isNavOpen = ref(useLocalStorage('isNavOpen', true));

  function toggleNav() {
    isNavOpen.value = !isNavOpen.value;
  }

  return { isNavOpen, toggleNav };
});
