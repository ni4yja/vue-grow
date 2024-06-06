<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modal.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { useDevicesStore } from '@/stores/devices.js';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import BaseNotification from '@/components/base/BaseNotification.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const modalStore = useModalStore();
const { closeModal } = modalStore;

const devicesStore = useDevicesStore();
const { setDevicesList } = devicesStore;

const applicationToken = ref('');

const authenticationStore = useAuthenticationStore();
const {
  isAuthenticationSuccessful,
  authErrorMessage,
  isLoading,
} = storeToRefs(authenticationStore);
const { handleAuthentication } = authenticationStore;

function authenticateUser() {
  handleAuthentication(applicationToken.value);
}

const showErrorMessage = computed(() => {
  return (
    authErrorMessage.value?.length &&
    !isAuthenticationSuccessful.value
  );
});

function goToDevices() {
  setDevicesList();
  closeModal();
  router.push({ path: '/devices' });
}
</script>

<template>
  <div class="authenticate-user">
    <div class="authenticate-user__header">
      <h2>Authentication with your Application Token</h2>
      <BaseButton @click="closeModal" icon="xmark" view="secondary" />
    </div>
    <div v-if="!isAuthenticationSuccessful" class="authenticate-user__field">
      <input type="text" class="authenticate-user__input" v-model="applicationToken"
        placeholder="Enter your application token" />
      <BaseButton class="authenticate-user__button" @click="authenticateUser" label="Authenticate" />
    </div>
    <div v-if="isLoading" class="authenticate-user__field authenticate-user__field--loading">
      <BaseIcon :name="'dots-scale-rotate'" class="authenticate-user__loading-icon" />
    </div>
    <template v-if="isAuthenticationSuccessful">
      <BaseNotification view="success" text="Your token worked. You're successfully authenticated." />
      <BaseButton class="authenticate-user__button" @click="goToDevices" label="Go to devices" />
    </template>
    <BaseNotification v-if="showErrorMessage" view="error" :text="authErrorMessage" />
  </div>
</template>

<style scoped>
.authenticate-user {
  padding: 2rem;

  @media (min-width: 960px) {
    padding: 0;
  }
}

.authenticate-user__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.authenticate-user__field {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.authenticate-user__field--loading {
  align-items: center;
}

.authenticate-user__input {
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

.authenticate-user__button {
  flex: 1;
  width: 100%;
}

.authenticate-user__loading-icon {
  width: 40px;
  height: 40px;
}
</style>
