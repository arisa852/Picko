import { ref } from 'vue'

export function useGeolocation() {
  const coords = ref({ latitude: null, longitude: null })
  const error = ref(null)
  const isSupported = 'geolocation' in navigator

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  function successGeoloacation(position) {
    const { latitude, longitude } = position.coords
    coords.value = { latitude, longitude }
    console.log(`緯度:${latitude},經度:${longitude}`)
  }
  function errorGeolocation(error) {
    error.value = error.message
    console.error(`錯誤:${error.message}`)
  }

  function getCurrentPosition() {
    if (!isSupported) {
      error.value = '瀏覽器不支持地理位置'
      return
    }

    navigator.geolocation.getCurrentPosition(successGeoloacation, errorGeolocation, options)
  }

  return {
    coords,
    error,
    isSupported,
    getCurrentPosition,
  }
}
