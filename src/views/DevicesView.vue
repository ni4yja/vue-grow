<script setup>
import { ref, computed } from 'vue';
import { useDevicesStore } from '@/stores/devices.js';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { storeToRefs } from 'pinia';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseTable from '@/components/base/BaseTable.vue';
import BaseNotification from '@/components/base/BaseNotification.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';

const devicesStore = useDevicesStore();
const { devicesList, fetchErrorMessage } =
  storeToRefs(devicesStore);
const { setDevicesList } = devicesStore;

const authenticationStore = useAuthenticationStore();
const { isAuthenticationSuccessful } = storeToRefs(
  authenticationStore,
);

const columns = ref([
  { field: 'name', label: 'Name' },
  { field: 'id', label: 'ID' },
  { field: 'status', label: 'Status' },
]);

const shouldShowTable = computed(() => {
  return (
    isAuthenticationSuccessful.value &&
    devicesList.value.length
  );
});

const shouldShowWarning = computed(() => {
  return (
    isAuthenticationSuccessful.value &&
    !devicesList.value.length
  );
});

const shouldShowError = computed(() => {
  return (
    fetchErrorMessage.value &&
    fetchErrorMessage.value.length > 0
  );
});
</script>

<template>
  <ContentWrapper>
    <div class="devices-view--actions">
      <h2 class="devices-view--title">Connected Devices</h2>
      <BaseButton
        @click="setDevicesList"
        class="devices-view--button"
        label="Fetch Devices"
      />
    </div>
    <BaseTable
      v-if="shouldShowTable"
      :items="devicesList"
      :columns="columns"
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
    <BaseNotification
      v-if="shouldShowWarning"
      view="warning"
      text="Your device list is empty. Click the button to fetch devices."
    />
    <BaseNotification
      v-if="shouldShowError"
      view="error"
      :text="fetchErrorMessage"
    />
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
