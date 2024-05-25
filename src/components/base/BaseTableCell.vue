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
      <p
        class="table-cell__title"
        :class="{
          'table-cell__title--custom': slots.custom,
        }"
      >
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
  box-sizing: border-box;
  padding: 16px 8px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  &:last-child {
    border-bottom: 0;
  }

  @media (min-width: 960px) {
    border-bottom: 0;
    padding: 0;
  }
}

.table-cell__box {
  line-height: 20px;
  width: 100%;
}

.table-cell__title {
  font-size: 14px;

  @media (min-width: 960px) {
    display: none;
  }
}

.table-cell__title--custom {
  font-weight: 700;

  @media (min-width: 960px) {
    display: block;
  }
}

.table-cell__description {
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 960px) {
    font-weight: 400;
  }
}
</style>
