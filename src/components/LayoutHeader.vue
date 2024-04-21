<script setup>
import { computed } from 'vue';
import { useModalStore } from '@/stores/modal.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { storeToRefs } from 'pinia';
import ModalAuthentication from '@/components/ModalAuthentication.vue';
import BaseButton from '@/components/base/BaseButton.vue';

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
</script>

<template>
  <div class="layout-header">
    <div class="layout-header__wrapper">
      <div class="layout-header__nav">
        <BaseButton icon="bars" view="secondary" />
        <p class="layout-header__logo">VueGrow</p>
      </div>
      <div class="layout-header__action">
        <BaseButton :icon="authIconName" @click="openModal" view="secondary" />
        <Teleport to="body">
          <ModalAuthentication v-if="isModalOpen" />
        </Teleport>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-header {
  height: 60px;
  background-color: #f5f5f5;

  @media (min-width: 960px) {
    background-color: transparent;
  }
}

.layout-header__wrapper {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
}

.layout-header__nav {
  display: flex;
  gap: 18px;
}

.layout-header__logo {
  font-family: 'Shadows Into Light', cursive;
  font-size: 2rem;
  font-weight: 400;
  font-style: normal;
  margin: 0;
}
</style>
