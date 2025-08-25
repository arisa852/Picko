1. 專案名稱與介紹

# Picko

針對選擇障礙的人，結合 Google Places + 天氣 API，給出穿搭與店家建議的 Vue 3 專案。

2. Demo

## Demo

👉 [線上試用連結](https://xxx.vercel.app)  
（請允許定位，才能取得附近資料）

3. 功能 Features

## 功能

- [ ] 使用者登入（localStorage 模擬）
- [x] 定位取得當前位置
- [x] 串接 Google Places API 搜尋附近服飾/餐飲
- [ ] 串接天氣 API，提供今日穿搭建議
- [ ] 收藏功能（開發中）
- [ ] UI 動畫（待加強）

✅ 代表已完成，❌/待辦代表之後要補，這樣面試官知道專案進度。

4. 技術棧 Tech Stack

## 技術棧

- Vue 3 (Vite, Composition API)
- Vue Router
- SCSS 模組化（variables, mixins）
- Google Places API

5. 專案結構（Optional）

## 專案結構

src/
├─ assets/ # 靜態資源
├─ components/ # 共用元件
├─ pages/ # 頁面
├─ services/ # API service
├─ composables/ # 共用 hook（useFetch 等）
└─ router/ # Vue Router 設定

6. 安裝與使用（必須有）

## 安裝與使用

# 1. clone 專案

git clone https://github.com/arisa852/Picko.git
cd Picko

# 2. 安裝套件

npm install

# 3. 複製環境變數範例

cp .env.example .env.local

# 並在 .env.local 填入你的 API key

# 4. 開發模式啟動

npm run dev

7. 未來計劃 / 待辦清單

## 未來計劃

- 收藏功能（Favorites 頁面）
- Google Place Details API 整合（照片、營業時間）
- 更細緻的穿搭建議邏輯
- UI 動畫
  這個專案仍在開發中，未來會逐步補齊功能
