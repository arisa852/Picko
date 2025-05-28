<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { watch } from 'vue'

  import logo from '../assets/image/logo3.png'

  const logoUrl = ref(logo)
  const search = ref('')
  const showSearch = ref(false)
  const login = () => {
    console.log('點擊登入按鈕')
  }

  const hoverItem = ref(null)
  const isMobile = ref(window.innerWidth < 768)
  const isOpen = ref(false)
  let mediaQuery

  const handleChange = (e) => {
    isMobile.value = e.matches
    if (!e.matches) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(max-width:1023px)')
    mediaQuery.addEventListener('change', handleChange)
    handleChange(mediaQuery)
  })

  // 記得存在外層，方便移除
  onBeforeUnmount(() => {
    mediaQuery.removeEventListener('change', handleChange)
  })

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const toggleSearch = () => {
    showSearch.value = !showSearch.value
  }

  const handleHover = (index) => {
    hoverItem.value = hoverItem.value === menus[index].name ? null : menus[index].name
  }

  watch(isMobile, (val) => {
    console.log('isMobile changed:', val)
  })

  watch(isOpen, (val) => {
    console.log('isOpen changed:', val)
  })

  const menus = [
    {
      id: 1,
      name: '吃什麼',
      link: '/eat',
      dropdown: [
        { name: '依地點', link: '/eat/location' },
        { name: '依預算', link: '/eat/budget' },
      ],
    },
    {
      id: 2,
      name: '穿什麼',
      link: '/wear',
      dropdown: [
        { name: '依天氣', link: '/wear/weather' },
        { name: '依場合', link: '/wear/occasion' },
      ],
    },
    { id: 3, name: '讓我選', link: '/pick' },
    { id: 4, name: '我的清單', link: '/my-picks' },
  ]
</script>
<template>
  <header class="header">
    <div class="wrapper" id="wrapper">
      <div class="logo-container">
        <img :src="logoUrl" alt="logo" />
      </div>
      <div class="search-wrapper">
        <i class="bi bi-search"></i>
        <input v-model="search" type="search" placeholder="請輸入關鍵字" class="search" />
      </div>
      <nav class="nav">
        <ul class="menu">
          <li
            v-for="menu in menus"
            :key="menu.id"
            :class="[
              'menu-item',
              { 'has-dropdown': menu.dropdown, active: hoverItem === menu.name },
            ]"
            @mouseover="hoverItem = menu.name"
            @mouseleave="hoverItem = null"
          >
            <a :href="menu.link">{{ menu.name }}</a>
            <span v-if="menu.dropdown" class="arrow" :class="{ active: hoverItem === menu.name }">
              &or;</span
            >
            <ul v-if="menu.dropdown" class="dropdown" v-show="hoverItem === menu.name">
              <li v-for="item in menu.dropdown" :key="item.link" class="dropdown-item">
                <a :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <button @click="login" ref="login" class="login">登入</button>

      <div class="hamburger" :class="{ open: isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="hamburger-menu" v-if="isOpen && isMobile">
        <ul class="navbar">
          <li
            v-for="(menu, index) in menus"
            :key="menu.id"
            :class="[
              'navbar-item',
              { 'has-dropdown': menu.dropdown, active: hoverItem === menu.name },
            ]"
            @click="handleHover(index)"
          >
            <a :href="menu.link">
              {{ menu.dropdown ? (hoverItem === menu.name ? '-' : '+') : '' }}{{ menu.name }}
            </a>
            <ul v-if="menu.dropdown && hoverItem === menu.name" class="dropdown">
              <li v-for="item in menu.dropdown" :key="item.link" class="dropdown-item">
                <a :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <button @click="login" class="login-btn">登入</button>
      </div>
      <button @click="toggleSearch" class="search-btn"><i class="bi bi-search"></i></button>
      <div class="search-overlay" :class="{ active: showSearch }">
        <div class="search-panel">
          <button @click="showSearch = false" class="close-btn">✕</button>
          <input v-model="search" type="search" placeholder="請輸入關鍵字" class="search-input" />
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  .header {
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .wrapper {
    display: flex;
    align-items: center;
    max-width: 1440px;
    padding: 20px;
    justify-content: center;
    margin: 0 auto;

    @include respond-to(pad) {
      padding: 20px 10px;
      justify-content: space-between;
      align-items: center;
    }
    @include respond-to(mobile) {
      padding: 20px 10px;
      justify-content: space-between;
      align-items: center;
    }

    .logo-container {
      width: 200px;
      margin-right: 20px;

      @include respond-to(pad) {
        width: 100px;
      }
      @include respond-to(mobile) {
        width: 120px;
        margin: 0 auto;
      }

      & img {
        width: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .search-wrapper {
      position: relative;

      .bi-search {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        color: $primary-color;

        @include respond-to(pad) {
          display: none;
        }

        @include respond-to(mobile) {
          display: none;
        }
      }

      .search {
        width: 360px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 30px;
        padding: 10px 10px 10px 30px;
        margin-right: 30px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

        @include respond-to(pad) {
          display: none;
        }
        @include respond-to(mobile) {
          display: none;
        }
      }
    }

    .nav {
      margin-right: 20px;

      @include respond-to(pad) {
        display: none;
      }
      @include respond-to(mobile) {
        display: none;
      }

      .menu {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;

        .menu-item {
          position: relative;
          margin-right: 20px;

          a {
            text-decoration: none;
            color: $primary-color;
            font-weight: bold;
            white-space: nowrap;
            padding-right: 5px;
          }

          .arrow {
            display: inline-block;
            transition: transform 0.3s ease;
            font-size: 0.6rem;
            color: $primary-color;
            font-weight: bold;
          }
          .arrow.active {
            transform: rotate(-90deg);
          }

          .dropdown {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #fff;
            padding: 10px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            z-index: 10;
            border-radius: 8px;
            min-width: 100px;

            .dropdown-item {
              a {
                color: $primary-color;
                font-size: 16px;
                text-decoration: none;
                line-height: 1.5;

                &:hover {
                  color: darken($primary-color, 10%);
                }
              }
            }
          }
        }
      }
    }

    .login {
      background-color: $primary-color;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 15px 30px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;

      @include respond-to(pad) {
        display: none;
        background-color: transparent;
      }

      @include respond-to(mobile) {
        display: none;
        background-color: transparent;
      }

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;

    @include respond-to(pad) {
      display: block;
    }
    @include respond-to(mobile) {
      display: block;
    }

    span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: $primary-color;
      margin: 5px 0;
      transition: 3s ease;
    }

    &.open span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &.open span:nth-child(2) {
      display: none;
    }
    &.open span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }

  .hamburger-menu {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: #f7f7f7;
    padding: 20px 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 10;

    .navbar {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-bottom: 2px solid #333;
      list-style: none;
      padding: 0;
      margin: 0;

      .navbar-item {
        margin-bottom: 20px;
        cursor: pointer;

        a {
          text-decoration: none;
          color: $primary-color;
          font-size: 1.125rem;
          line-height: 1.5;
          font-weight: bold;

          &:hover {
            color: darken($primary-color, 10%);
          }
        }
        .dropdown {
          list-style: none;
          padding: 10px 0 0 20px;
          margin: 10px 0 0 0;
          border-left: 2px solid $primary-color;

          .dropdown-item {
            margin-bottom: 8px;

            a {
              font-size: 1.125rem;
              font-weight: normal;
              color: darken($primary-color, 20%);

              &:hover:active {
                color: $primary-color;
              }
            }
          }
        }
      }
    }
  }

  .search-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 10px;
    display: none;

    @include respond-to(pad) {
      display: block;
    }
    @include respond-to(pad) {
      display: block;
    }

    .bi-search {
      font-size: 1.5rem;
      color: $primary-color;
      border: none;
      cursor: pointer;
    }
  }

  .search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: height 0.3s ease;
    overflow: hidden;

    &.active {
      height: 100%;
    }

    .search-panel {
      background-color: #fff;
      padding: 2rem;
      position: relative;
      max-width: 600px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      margin: 5% auto;
      border-radius: 8px;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 1.5rem;
    }
    .search-input {
      width: 100%;
      font-size: 1.2rem;
      padding: 0.5rem;
    }
  }

  .login-btn {
    background-color: transparent;
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
    color: $primary-color;
    margin-top: 20px;
    font-weight: bold;
  }
</style>
