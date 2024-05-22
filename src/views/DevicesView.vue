<script setup>
import { ref, onMounted } from 'vue';
import { useDevicesStore } from '@/stores/devices.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { useModalStore } from '@/stores/modal.js';
import { storeToRefs } from 'pinia';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseTable from '@/components/base/BaseTable.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';

const devicesStore = useDevicesStore();
const { devicesList } = storeToRefs(devicesStore);
const { setDevicesList } = devicesStore;

const modalStore = useModalStore();
const { openModal } = modalStore;

const authenticationStore = useAuthenticationStore();
const { isAuthenticationSuccessful } = storeToRefs(
  authenticationStore,
);

onMounted(() => {
  setDevicesList();
});
</script>

<template>
  <ContentWrapper>
    <div class="devices-view--actions">
      <h2 class="devices-view--title">Connected Devices</h2>
      <BaseButton
        v-if="!isAuthenticationSuccessful"
        @click="openModal"
        class="devices-view--button"
        label="Login to see devices"
      />
    </div>
    <BaseTable
      v-if="isAuthenticationSuccessful"
      :items="devicesList"
    >
      <template #name="{ item }">
        <span>{{ item.name }}</span>
      </template>
      <template #id="{ item }">
        <span>{{ item.id }}</span>
      </template>
      <template #status="{ item }">
        <span>{{ item.status.description }}</span>
      </template>
    </BaseTable>
  </ContentWrapper>
</template>

<style scoped>
.devices-view--actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.devices-view--title {
  font-size: 1.6rem;
}

.devices-view--button {
  flex: 1;
  width: 100%;

  @media (min-width: 960px) {
    flex: initial;
    width: fit-content;
  }
}
</style>
