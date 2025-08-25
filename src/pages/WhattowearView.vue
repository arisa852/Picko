<script setup>
  import { ref } from 'vue'
  import BannerSection from '../components/Home/BannerSection.vue'
  import EatCard from '../components/EatCard.vue'
  import WearWeather from '../assets/image/wearweather.png'
  import WearLocatcal from '../assets/image/Artboardwear.png'
  import router from '../router'

  const weathersets = () => {
    router.push('/wear/weather')
  }

  const localsets = () => {
    router.push('/wear/locasion')
  }
</script>
<template>
  <BannerSection>
    <div class="bn-text">
      <h1 class="slot-heading">今天要穿什麼？</h1>
      <p class="slot-paragraph">不想煩惱，就交給我們幫你配！</p>
    </div>
  </BannerSection>
  <section class="wear-wrapper">
    <EatCard :image-src="WearWeather" :image-alt="依天氣推薦">
      <template #title>
        <h6>依天氣推薦</h6>
      </template>
      <template #description>
        <p>根據今天天氣自動建議適合穿搭，晴天雨天都不怕。</p>
      </template>
      <template #button>
        <button class="wearweather-button" @click="weathersets">看穿什麼</button>
      </template>
    </EatCard>
    <EatCard :image-src="WearLocatcal" :image-alt="依場合推薦">
      <template #title>
        <h6>依場合推薦</h6>
      </template>
      <template #description>
        <p>上班？約會？運動？選擇你今天的行程，我幫你搞定穿搭。</p>
      </template>
      <template #button>
        <button class="wearlocal-button" @click="localsets">幫我配合場合穿搭</button>
      </template>
    </EatCard>
  </section>
</template>
<style lang="scss" scoped>
  .slot-heading {
    @include heading-style;
  }

  .slot-paragraph {
    @include minheading-style;
  }

  .wearweather-button,
  .wearlocal-button {
    @include button-style;
    white-space: nowrap;
    border: 2px solid $primary-color;
    background-color: #fff;

    @include respond-to(pad) {
      max-width: 100%;
    }

    @include respond-to(mobile) {
      max-width: 100%;
    }

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }
  }

  .wearlocal-button {
    width: 250px;
  }
</style>
