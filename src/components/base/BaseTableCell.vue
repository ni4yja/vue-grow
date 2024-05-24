<script setup>
import { useSlots } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String, Number, Object],
    required: true,
  },
});

const slots = useSlots();
</script>

<template>
  <div class="table-cell">
    <div class="table-cell__box table-cell__box--title">
      <p class="table-cell__title">
        {{ props.title }}
      </p>
    </div>
    <div
      v-if="slots.custom"
      class="table-cell__box table-cell__box--custom"
    >
      <slot name="custom">{{ props.content }}</slot>
    </div>
    <div
      v-if="!slots.custom"
      class="table-cell__box table-cell__box--description"
    >
      <p class="table-cell__description">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.table-cell {
  padding: 16px 8px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: 0;
  }

  @media (min-width: 960px) {
    border-bottom: 0;
  }
}

.table-cell__box {
  line-height: 20px;
}

.table-cell__title {
  font-size: 14px;
}

.table-cell__description {
  font-size: 14px;
  font-weight: 700;
}
</style>
