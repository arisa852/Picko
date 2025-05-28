<script setup>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
</script>
<template>
  <Header />
  <div class="wrapper">
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>
<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
  }
</style>
