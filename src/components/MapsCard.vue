<script setup>
  import { computed, watch, onMounted } from 'vue'
  import { useGeolocation } from '../composable/useGeolocation'

  const { coords, error, isSupported, getCurrentPosition } = useGeolocation()

  const center = computed(() => {
    if (coords.value.latitude && coords.value.longitude) {
      return {
        lat: coords.value.latitude,
        lng: coords.value.longitude,
      }
    }
    return null
  })

  onMounted(() => {
    getCurrentPosition() // ✅ 啟動定位
  })

  watch(coords, (val) => {
    console.log('[MapCard] 座標更新:', val)
  })
</script>
<template>
  <div class="map-wrapper">
    <slot>
      <h6>現在的位置</h6>
      <p>這裡將顯示你的當前位置地圖，讓你隨時掌握自己在哪裡，方便挑選附近餐廳。</p>
    </slot>
    <GMapMap v-if="center" :center="center" :zoom="14" class="my-map" />
  </div>
</template>
<style lang="scss" scoped>
  .map-wrapper {
    display: block;
    margin: 0 auto;

    & h6 {
      @include subheading-style;
      text-align: center;
      margin-bottom: 10px;
    }

    & p {
      @include paragraph-style;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .my-map {
    max-width: 1200px;
    width: 100%;
    height: 400px;
    box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 1);
    margin: 0 auto;
    border: 2px solid $primary-color;
    margin-bottom: 40px;
  }
</style>
