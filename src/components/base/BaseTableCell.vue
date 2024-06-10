<script setup>
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
</script>

<template>
  <div class="table-cell">
    <div class="table-cell__box table-cell__box--title">
      {{ props.title }}
    </div>
    <div class="table-cell__box">
      <slot>{{ props.content }}</slot>
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

  &:first-child {
    @media (min-width: 960px) {
      .table-cell__box--title {
        display: block;
      }
    }
  }

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
  font-size: 14px;
}

.table-cell__box--title {
  @media (min-width: 960px) {
    display: none;
  }
}
</style>
