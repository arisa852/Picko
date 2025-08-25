<script setup>
  import { ref } from 'vue'
</script>
<template>
  <section class="situation">
    <h2>Picko 可以這樣幫你</h2>
    <div class="picko-container">
      <div class="picko-situ">
        <h6>中午不知道吃什麼？</h6>
        <p>打開 Picko，一鍵推薦好吃又剛好的選項，不再滑外送半小時！</p>
      </div>
      <div class="picko-situ">
        <h6>約會快遲到，還在想穿什麼？</h6>
        <p>讓 Picko 幫你挑出最適合的風格，不用再翻衣櫃到崩潰。</p>
      </div>
      <div class="picko-situ">
        <h6>一群人選餐廳吵翻天？</h6>
        <p>用 Picko 協助大家快速統一意見，公平又省時！</p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .situation {
    padding: 40px 0;
    background: linear-gradient(to top, $primary-color, #fff);
    overflow: hidden;

    & h2 {
      font-size: 2.375rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: $primary-color;
    }

    .picko-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin: 0 auto;
      max-width: 1200px;
      overflow: hidden;

      @include respond-to(pad) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 600px;
        gap: 20px;
      }

      @include respond-to(mobile) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 300px;
        gap: 20px;
      }

      .picko-situ {
        background-color: #f7f7f7;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 20px 40px;
        border-radius: 30px;

        @include respond-to(pad) {
          padding: 20px;
        }
        @include respond-to(mobile) {
          padding: 20px;
        }

        & h6 {
          font-size: 1.375rem;
          text-align: center;
          font-weight: bold;
          margin-bottom: 20px;
          color: #666;
          white-space: nowrap;
          line-height: 1.5;
        }

        & p {
          font-size: 1.125rem;
          line-height: 1.5;
          color: #333;
        }
      }
    }
  }
</style>
