<script setup>
const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  content: {
    type: [String, Number, Object],
    required: true,
  },
});
</script>
<template>
  <div class="table-cell">
    <div class="table-cell__name">{{ props.name }}</div>
    <div class="table-cell__content">
      {{ props.content }}
    </div>
    <div class="table-cell__actions"></div>
  </div>
</template>

<style scoped>
.table-cell {
  background: yellow;
}
</style>
