<script setup>
import { useModalStore } from '@/stores/modal.js';

const modalStore = useModalStore();
const { closeModal } = modalStore;

const props = defineProps({
  closable: {
    type: Boolean,
    default: true,
  },
});

function handleClose() {
  if (props.closable) {
    closeModal();
  }
}
</script>
<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__data-wrapper">
        <button class="modal__close" @click="handleClose" />
        <div class="modal__data"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.modal__wrapper {
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
  table-layout: fixed;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 960px) {
    padding-top: 50px;
    padding-bottom: 50px;
    table-layout: initial;
  }
}

.modal__data-wrapper {
  width: 100%;
  height: 100%;

  @media (min-width: 960px) {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background: none;
  }
}

.modal__data {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  text-align: left;
  background: var(--layout-surface-01);
  border-radius: 12px;
  box-sizing: border-box;

  @media (min-width: 960px) {
    max-width: 460px;
    height: auto;
    padding: 40px;
  }
}

.modal__close {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 28%);
}

.modal__close-button {
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 99;
  box-sizing: border-box;

  @media (min-width: 960px) {
    top: 30px;
    right: 20px;
  }
}

.modal__content {
  height: inherit;
}
</style>
