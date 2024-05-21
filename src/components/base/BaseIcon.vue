<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconPath = ref('');

watchEffect(async () => {
  if (props.name) {
    try {
      const module = await import(
        `../../assets/icons/${props.name}.svg`
      );
      iconPath.value = module.default;
    } catch (error) {
      console.error('Failed to load icon:', error);
    }
  }
});
</script>

<template>
  <div class="icon">
    <svg class="icon__image">
      <use :href="`#${iconPath}`" />
    </svg>
  </div>
</template>

<style scoped>
.icon {
  position: relative;
  display: inline-block;
  width: 24px;
  min-width: 24px;
  height: 24px;
  vertical-align: top;
  fill: #000000;
}

.icon__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  fill: inherit;
}
</style>
