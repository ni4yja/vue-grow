import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const isNavExpanded = ref(useLocalStorage('isNavExpanded', true));

  function toggleNav() {
    isNavExpanded.value = !isNavExpanded.value;
  }

  return { isNavExpanded, toggleNav };
});
