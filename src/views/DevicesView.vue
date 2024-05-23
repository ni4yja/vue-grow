<script setup>
import { onMounted } from 'vue';
import { useDevicesStore } from '@/stores/devices.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { useModalStore } from '@/stores/modal.js';
import { storeToRefs } from 'pinia';
import BaseButton from '@/components/base/BaseButton.vue';
import DevicesTable from '@/components/DevicesTable.vue';
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
    <DevicesTable
      v-if="isAuthenticationSuccessful"
      :devices="devicesList"
    ></DevicesTable>
  </ContentWrapper>
</template>

<style scoped>
.devices-view--actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 960px) {
  .devices-view--actions {
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
}

@media (min-width: 960px) {
  .devices-view--button {
    flex: initial;
    width: fit-content;
  }
}
</style>
