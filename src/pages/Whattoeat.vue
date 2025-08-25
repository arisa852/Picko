<script setup>
  import { ref } from 'vue'
  import BannerSection from '../components/Home/BannerSection.vue'
  import Eatlocal from '../assets/image/local.png'
  import EatBudget from '../assets/image/budget.png'
  import { useRouter } from 'vue-router'
  import EatCard from '../components/EatCard.vue'

  const router = useRouter()

  const local = () => {
    router.push('/eat/location')
  }
  const budget = () => {
    router.push('/eat/budget')
  }
</script>
<template>
  <BannerSection>
    <div class="bn-text">
      <h1 class="slot-heading">你今天想吃什麼？</h1>
      <p class="slot-paragraph">小小的選擇，大大的滿足</p>
    </div>
  </BannerSection>
  <section class="eat-wrapper">
    <EatCard :image-src="Eatlocal" :image-alt="依地點挑選">
      <template #title>
        <h6>依地點挑選</h6>
      </template>
      <template #description>
        <p>看看你附近有什麼好吃的。不用走遠，也能吃得滿足！</p>
      </template>
      <template #button>
        <button class="eatlocal-button" @click="local">看看附近</button>
      </template>
    </EatCard>
    <EatCard :image-src="EatBudget" :image-alt="依預算挑選">
      <template #title>
        <h6>依地點挑選</h6>
      </template>
      <template #description>
        <p>輸入你的預算，找出最適合今天荷包的選擇～</p>
      </template>
      <template #button>
        <button class="eatbudget-button" @click="budget">控制預算吃好料</button>
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

  .eatlocal-button,
  .eatbudget-button {
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

  .eatbudget-button {
    width: 200px;
  }
</style>
