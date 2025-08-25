<script setup>
  import BannerSection from '../components/Home/BannerSection.vue'
  import { useGeolocation } from '../composable/useGeolocation'
  import MapsCard from '../components/MapsCard.vue'

  const { coords, error, isSupported, getCurrentPosition } = useGeolocation()
</script>
<template>
  <BannerSection>
    <div class="bn-text">
      <h1 class="slot-head">探索你附近的美食！</h1>
      <p class="slot-p">讓我們幫你找到最近、最好吃的餐廳。</p>
      <button class="local-button" @click="getCurrentPosition">取得目前位置</button>
    </div>
  </BannerSection>
  <MapsCard> </MapsCard>
</template>
<style lang="scss" scoped>
  .slot-head {
    @include heading-style;
  }

  .slot-p {
    @include minheading-style;
    word-break: break-all;
  }

  .local-button {
    @include button-style;
    white-space: nowrap;
    border: 2px solid $primary-color;
    background-color: #fff;
    margin-top: 20px;
  }
</style>
