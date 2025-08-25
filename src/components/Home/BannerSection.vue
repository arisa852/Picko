<script setup>
  import { ref } from 'vue'
  import bannerImg from '../../assets/image/Artboard 1.png'
</script>
<template>
  <section class="banner">
    <div class="header-space"></div>
    <div class="container">
      <slot>
        <div class="bn-text">
          <h1>Picko，幫你決定生活大小事！</h1>
          <p>
            不再猶豫，「吃什麼」、「穿什麼」<br />
            通通交給Picko！
          </p>
        </div>
      </slot>
      <div class="bn-img">
        <img :src="bannerImg" alt="Banner" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .header-space {
    height: 100px;
  }

  .banner {
    width: 100%;
    max-width: 100%;
    position: relative;
    background: linear-gradient(to bottom, $primary-color, #fff);
    overflow: hidden;

    .container {
      margin: 0 auto;
      max-width: 1080px;
      position: relative;
      z-index: 3;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      @include respond-to(pad) {
        flex-direction: column;
        padding: 40px;
        max-width: 100%;
      }
      @include respond-to(mobile) {
        flex-direction: column;
        padding: 40px;
        max-width: 100%;
      }
    }

    .bn-text {
      width: 50%;
      display: inline-block;

      @include respond-to(pad) {
        width: 100%;
      }

      @include respond-to(mobile) {
        width: 100%;
      }

      & h1 {
        font-weight: bold;
        margin-bottom: 10px;
        line-height: 1.5;
        font-size: 2.35rem;
        color: #333;
      }

      & p {
        font-size: 1.25rem;
        line-height: 1.5;
        margin-bottom: 20px;
        color: #333;
      }
    }

    .bn-img {
      width: 50%;

      @include respond-to(pad) {
        width: 100%;
      }

      @include respond-to(mobile) {
        width: 100%;
      }

      & img {
        width: 100%;
        overflow: hidden;
        object-fit: contain;
        height: auto;
        display: block;
      }
    }
  }
</style>
