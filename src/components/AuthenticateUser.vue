<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { authenticate } from '@/services/authService';
import { useModalStore } from '@/stores/modal.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import BaseButton from '@/components/base/BaseButton.vue';

const modalStore = useModalStore();
const { closeModal } = modalStore;

const authenticationStore = useAuthenticationStore();
const { isAuthenticationSuccessful } = storeToRefs(authenticationStore);
const { setAuthToken, completeAuthenticationProcess, stopAuthenticationProcess } =
  authenticationStore;

const applicationToken = ref('');

async function handleAuthentication() {
  try {
    const data = await authenticate(applicationToken.value);
    setAuthToken(data.auth_token);
    completeAuthenticationProcess();
  } catch (error) {
    console.error('Authentication failed:', error);
    stopAuthenticationProcess();
  }
}

const showSuccessMessage = computed(() => isAuthenticationSuccessful.value);
</script>
<template>
  <div class="authenticate-user">
    <div class="authenticate-user__header">
      <h2>Authenticatation with your Application Token</h2>
      <BaseButton @click="closeModal" icon="xmark" view="secondary" />
    </div>
    <div v-if="!showSuccessMessage" class="authenticate-user__field">
      <input
        type="text"
        class="authenticate-user__input"
        v-model="applicationToken"
        placeholder="Enter your application token"
      />
      <BaseButton
        class="authenticate-user__button"
        @click="handleAuthentication"
        label="Authenticate"
      />
    </div>
    <div v-if="showSuccessMessage">
      <p>Your token worked. You're successfully authenticated.</p>
    </div>
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
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.authenticate-user__field {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
</style>
