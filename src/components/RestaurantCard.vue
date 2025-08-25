<script setup>
  import { ref } from 'vue'

  defineProps({
    restaurant: Object,
  })

  const isOpen = ref(false)

  function toggleOpen() {
    isOpen.value = !isOpen.value
  }
</script>
<template>
  <div class="card">
    <h3 @click="toggleOpen" class="cursor:pointer">
      {{ restaurant.name }} - 評分: {{ restaurant.rating || '無' }}
      <span v-if="isOpen">▲</span>
      <span v-else>▼</span>
    </h3>
    <div v-if="isOpen" class="details">
      <p>地址: {{ restaurant.vicinity }}</p>
      <p>類型: {{ restaurant.types.join(', ') }}</p>
      <p>營業狀態: {{ restaurant.opening_hours?.open_now ? '營業中' : '休息' }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
    transition: all 0.3s;
  }
  .details {
    margin-top: 8px;
    font-size: 14px;
    color: #555;
  }
</style>
