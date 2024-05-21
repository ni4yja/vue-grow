<script setup>
import BaseNotification from '@/components/base/BaseNotification.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
</script>
<template>
  <ContentWrapper>
    <BaseNotification
      view="info"
      text="This is my pet project, developed as part of my Personal Development Plan after completing the 'Vue - The Complete Guide' course on Udemy. It utilizes the Composition API syntax and incorporates the official Vue.js Router, Axios for handling authentication and data fetching, and Pinia for state management. Additionally, I've implemented the VueUse library, a collection of utility functions based on Composition API to enhance local storage interactions, detect user scrolling, and manage reactive date data (for token expiration)."
    />
    <BaseNotification
      view="success"
      text="VueGrow is the first project I built using Pinia, chosen for its simpler integration with the Vue 3 Composition API compared to Vuex. Pinia offers numerous additional benefits; it allows the creation of multiple stores, which simplifies management and enhances integration between different parts of the application. Moreover, Pinia's API is more straightforward and intuitive — eliminating the need for separate concepts like mutations and actions, which are essential in Vuex."
    />
    <BaseNotification
      view="warning"
      text="One of the challenges in developing VueGrow was creating icon sprites. I wanted a BaseIcon component that could change its appearance based on its name. This was achieved using the vite-plugin-svg-sprite for Vite, which made it easy to manage SVG sprites in the project. This approach helped keep the icons scalable and easy to maintain."
    />
    <BaseNotification
      view="error"
      text="As I developed the VueGrow project, I continually found new features I wanted to implement. However, due to time constraints, the design isn’t yet pixel-perfect, and features like loading states and pagination are still missing. In the future, I'm looking forward to experimenting with Pinia Colada, a new, but not yet production-ready, data fetching library for Pinia that could enhance the project's capabilities."
    />
  </ContentWrapper>
</template>
