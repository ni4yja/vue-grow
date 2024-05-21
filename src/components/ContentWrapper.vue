<script setup></script>

<template>
  <main class="content-wrapper">
    <div class="content-wrapper--slot">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
.content-wrapper {
  box-sizing: border-box;
  grid-area: content;
  padding: 24px;
}
</style>
