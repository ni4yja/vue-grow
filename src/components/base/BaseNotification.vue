<script setup>
const props = defineProps({
  view: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="notification" :class="`notification--${props.view}`">
    <slot>
      <p>{{ text }}</p>
    </slot>
  </div>
</template>

<style src="@/assets/styles/variables.css" />
<style scoped>
.notification {
  padding: 13px 14px 13px 45px;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 1rem;
}

.notification--success {
  background-color: var(--support-success);
}

.notification--warning {
  background-color: var(--support-warning);
}

.notification--error {
  background-color: var(--support-error);
}
</style>
