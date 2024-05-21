<script setup>
import BaseIcon from '@/components/base/BaseIcon.vue';

const props = defineProps({
  icon: {
    type: String,
  },
  label: {
    type: String,
  },
  view: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value);
    },
  },
});
</script>
<template>
  <button
    class="button"
    :class="`button--${props.view}-view`"
  >
    <slot>
      <BaseIcon
        v-if="props.icon"
        class="button__icon"
        :name="props.icon"
      />
      <span v-if="props.label" class="button__label">
        {{ props.label }}
      </span>

      <span v-if="props.isLoading" class="button__loader" />
    </slot>
  </button>
</template>

<style scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0;
  padding: 0;
  font-family: Inter, Helvetica, Arial, sans-serif;
  text-align: center;
  cursor: pointer;
  outline: none;
  white-space: pre-line;
  appearance: none;
  box-sizing: border-box;

  &:focus-visible,
  &:focus {
    box-shadow: none;
  }
}

.button--primary-view {
  padding: 14px 32px;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: var(--primary-01);

  &:hover {
    background-color: var(--primary-01-hovered);
  }
}

.button--secondary-view {
  background: none;
  border: none;
  width: 60px;
  height: 60px;
}
</style>
