<template>
  <div id="map">
  </div>
</template>

<script setup>
import { getRestaurants } from 'boot/axios.js'
import { googleObject } from 'boot/google.js'
import { onMounted } from 'vue'

let map = null
const locations = []

onMounted(async () => {
  await googleObject()
  map = initMap()

  const places = await getPlaceData()

  console.log(map)
  console.log(places)
})

const initMap = () => {
  const options = {
    center: { lat: 38.494, lng: -98.553 },
    zoom: 5,
    maxZoom: 17,
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false
  }
  const map = new window.google.maps.Map(document.getElementById('map'), options)
  return map
}
const getPlaceData = async () => {
  try {
    const { data } = await getRestaurants.get('', {
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359'
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '2d65c5d0c2msh19283b6a8bff6f4p146bbcjsne13f80bb5505'
      }
    })
    const result = data.data.map((data) => {
      return [
        data.latitude,
        data.longitude
      ]
    })
    for (let i = 0; i < result.length; i++) {
      locations.push(result[i])
    }
    setMarkers()
  } catch (error) {
    console.log(error)
  }
}
const setMarkers = () => {
  for (let i = 0; i < locations.length; i++) {
    const singleLocation = locations[i]
    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(singleLocation[0], singleLocation[1]),
      map
    })
    console.log(marker)
  }
}
</script>

<style lang="sass">
#map
  width:100%
  height: 100%
  position: absolute
  top: 0px
  left: 0px

</style>
