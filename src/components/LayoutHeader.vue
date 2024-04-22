<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useUiStore } from '@/stores/ui.js';
import { useModalStore } from '@/stores/modal.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { storeToRefs } from 'pinia';
import ModalAuthentication from '@/components/ModalAuthentication.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useWindowScroll } from '@vueuse/core';

const uiStore = useUiStore();
const { isNavExpanded } = storeToRefs(uiStore);
const { toggleNav } = uiStore;

const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);
const { openModal } = modalStore;

const authenticationStore = useAuthenticationStore();
const { isAuthenticationSuccessful } = storeToRefs(authenticationStore);

const authIconName = computed(() => {
  if (isAuthenticationSuccessful.value) {
    return 'crown-diamond';
  } else if (isAuthenticationSuccessful.value === false) {
    return 'triangle-exclamation';
  }
  return 'arrow-right-to-square';
});

const isHeaderFixed = ref(false);
const { y } = useWindowScroll();

watchEffect(() => {
  isHeaderFixed.value = y.value > 100;
});
</script>

<template>
  <header
    class="layout-header"
    :class="{
      'layout-header--fixed': isHeaderFixed,
    }"
  >
    <div class="layout-header__wrapper">
      <div
        class="layout-header__nav"
        :class="{
          'layout-header__nav--colored': isNavExpanded,
        }"
      >
        <BaseButton class="layout-header__button" @click="toggleNav" icon="bars" view="secondary" />
        <p class="layout-header__logo">VueGrow</p>
      </div>
      <div class="layout-header__action">
        <BaseButton @click="openModal" :icon="authIconName" view="secondary" />
        <Teleport to="body">
          <ModalAuthentication v-if="isModalOpen" />
        </Teleport>
      </div>
    </div>
  </header>
</template>

<style src="@/assets/styles/variables.css" />
<style scoped>
.layout-header {
  height: 60px;
  grid-area: header;
  background-color: var(--layout-surface-02);
  z-index: 1;

  @media (min-width: 960px) {
    background-color: var(--layout-surface-01);
  }
}

.layout-header--fixed {
  position: fixed;
  width: 100%;
  background-color: var(--layout-surface-02);
}

.layout-header__wrapper {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 0;
}

.layout-header__nav {
  position: relative;
  width: 60px;
}

.layout-header__nav--colored {
  width: 300px;
  transition: width 0.3s ease;
  background-color: var(--layout-surface-02);
}

.layout-header__button {
  background-color: var(--layout-surface-02);
}

.layout-header__logo {
  font-family: 'Shadows Into Light', cursive;
  font-size: 2rem;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  position: absolute;
  top: 10px;
  left: 78px;
}
</style>
