<script setup>
  defineProps({
    imageSrc: String,
    imageArt: {
      type: String,
      default: '圖片說明',
    },
  })

  const onclick = () => emit('click')
</script>
<template>
  <section class="eat-wrapper">
    <div class="eatcard">
      <div class="eatcard-image">
        <img :src="imageSrc" :alt="imageArt" />
      </div>
      <div class="eatcard-text">
        <h6><slot name="title">這是標題</slot></h6>
        <p><slot name="description">這是預設的文字內容</slot></p>
        <div class="eatcard-button">
          <slot name="button"><button @click="onclick">預設按鈕</button></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .eat-wrapper {
    padding: 0 16px;
    overflow: hidden;
    margin: 80px auto;
    width: 100%;
    max-width: 1080px;
    box-sizing: border-box;

    @include respond-to(pad) {
      margin: 40px auto;
    }

    @include respond-to(mobile) {
      margin: 40px auto;
    }
  }

  @include eat-section-style('eatcard');

  .eatcard {
    @include respond-to(pad) {
      flex-direction: column;
      gap: 20px;
      align-items: center;
      margin: 20px 0;
    }

    @include respond-to(mobile) {
      flex-direction: column;
      gap: 20px;
      align-items: center;
      margin: 20px 0;
    }

    .eatcard-image {
      @include respond-to(pad) {
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        max-width: 680px;
      }

      @include respond-to(mobile) {
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        max-width: 300px;
      }
    }

    .eatcard-text {
      @include respond-to(pad) {
        width: 100%;
        white-space: pre-line;
        margin-left: 0;
      }

      @include respond-to(mobile) {
        width: 100%;
        white-space: pre-line;
        margin-left: 0;
      }

      h6 {
        @include respond-to(pad) {
          font-size: 2rem;
          margin-bottom: 20px;

          @include respond-to(mobile) {
            font-size: 1.75rem;
            margin-bottom: 20px;
          }
        }

        p {
          @include respond-to(pad) {
            margin-bottom: 20px;
          }

          @include respond-to(mobile) {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>
