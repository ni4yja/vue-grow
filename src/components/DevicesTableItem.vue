<script setup>
const props = defineProps({
  device: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div>
    {{ device }}
  </div>
</template>

<style scoped>
/* Component CSS here */
</style>
