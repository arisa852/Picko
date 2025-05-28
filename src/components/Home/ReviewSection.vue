<script setup>
  import { ref } from 'vue'
  import commentImg from '../../assets/image/design.png'
  import avatarImg from '../../assets/image/avator.png'
  import logoImg from '../../assets/image/純logo.png'

  const commentLists = [
    {
      id: 1,
      name: '阿信',
      avatar: logoImg,
      link: '/detail/1',
      title: '終於不用為晚餐煩惱了',
      desc: 'Picko 真的超方便，每天都靠它決定午餐！',
      img: avatarImg,
      date: '2025-05-10',
    },
    {
      id: 2,
      name: '小美',
      avatar: logoImg,
      link: '/detail/2',
      title: '節省時間又不失控',
      desc: '我不再跟朋友吵該吃什麼了，太讚了！',
      img: avatarImg,
      date: '2025-04-28',
    },
  ]
</script>
<template>
  <section class="comment">
    <h2>用戶見證</h2>
    <div class="comment-wrapper">
      <div class="comment-image">
        <img :src="commentImg" alt="comment" />
      </div>
      <div class="comment-list">
        <div class="comment-container" v-for="item in commentLists" :key="item.id">
          <div class="comment-left">
            <img :src="item.img" class="comment-img" alt="user shared image" />
          </div>
          <div class="comment-right">
            <div class="comment-header">
              <img :src="item.avatar" class="comment-avatar" alt="avatar" />
              <p class="comment-name">{{ item.name }}</p>
              <div class="comment-day">
                <p class="comment-date">{{ item.date }}</p>
              </div>
            </div>
            <h5 class="comment-title">{{ item.title }}</h5>
            <p class="comment-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .comment {
    padding: 40px 0;
    background-color: $primary-color;
    overflow: hidden;

    & h2 {
      font-size: 2.375rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: #fff;
    }

    .comment-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: start;
      gap: 5px;
      overflow: hidden;

      @include respond-to(pad) {
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 680px;
      }

      @include respond-to(mobile) {
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 320px;
      }

      .comment-image {
        overflow: hidden;

        & img {
          width: 100%;
          max-width: 450px;
          overflow: hidden;
          object-fit: cover;
          display: block;
          height: auto;
        }
      }

      .comment-list {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .comment-container {
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding: 20px 10px;
          border-radius: 15px;
          display: flex;
          gap: 20px;

          .comment-left {
            width: 40%;

            @include respond-to(pad) {
              width: 40%;
            }

            @include respond-to(mobile) {
              width: 40%;
            }

            & img {
              width: 100%;
              overflow: hidden;
              object-fit: cover;
              display: block;
              height: auto;
              border-radius: 15px;
            }
          }

          .comment-right {
            width: 60%;

            @include respond-to(pad) {
              width: 60%;
            }

            @include respond-to(mobile) {
              width: 60%;
            }

            .comment-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 10px;
              flex: 1;

              & img {
                width: 40px;
                overflow: hidden;
                object-fit: cover;
                display: block;
                height: auto;
                border-radius: 50%;
                margin-right: 10px;
              }

              & p {
                font-size: 1.375rem;
                color: #333;

                @include respond-to(pad) {
                  font-size: 1.25rem;
                }
                @include respond-to(mobile) {
                  font-size: 1.25rem;
                }
              }
            }
            .comment-day {
              color: #333;
              margin-left: auto;

              & p {
                font-size: 0.875rem;
              }
            }

            & h5 {
              font-size: 1.425rem;
              font-weight: bold;
              color: $text-color;
              margin-top: 20px;
              margin-bottom: 40px;

              @include respond-to(pad) {
                margin-bottom: 10px;
                font-size: 1.375rem;
                margin-top: 10px;
              }

              @include respond-to(pad) {
                margin-bottom: 10px;
                font-size: 1.375rem;
                margin-top: 10px;
              }
            }

            & p {
              font-size: 1.125rem;
              line-height: 1.5;
              color: $text-color;

              @include respond-to(pad) {
                font-size: 1.1rem;
              }
              @include respond-to(mobile) {
                font-size: 1.1rem;
              }
            }
          }
        }
      }
    }
  }
</style>
