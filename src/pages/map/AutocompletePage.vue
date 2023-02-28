<template>
  <div>
    <div>
      <q-radio id="changetype-all" v-model="selectedChangeType" val="all">
        全部
      </q-radio>
      <q-radio
        id="changetype-establishment"
        v-model="selectedChangeType"
        val="establishment"
      >
        場所
      </q-radio>
      <q-radio id="changetype-address" v-model="selectedChangeType" val="address">
        地址
      </q-radio>
      <q-radio id="changetype-geocode" v-model="selectedChangeType" val="geocode">
        地理編碼
      </q-radio>
    </div>
    <q-input ref="pacInputEl" type="text" placeholder="搜尋地點" />
    <q-select
      v-model="type"
      label="類型"
      :options="typeOptions"
      class="q-mb-md"
      emit-value
      @update:model-value="showPlaces"
    />
    <q-select
      v-model="rating"
      label="評分"
      :options="ratingOptions"
      emit-value
      @update:model-value="showPlaces"
    />
    <div id="map" ref="mapEl" />

    <div ref="infowindowEl">
      <div>
        <span ref="place-name" class="title" />
        <br>
        <span id="place-address" ref="place-address" />
      </div>
    </div>
  </div>
</template>

<script setup>
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
import googleObject from 'boot/google.js'
import { onMounted, ref } from 'vue'
import { apiAdvisor } from 'boot/axios.js'
import { useMapStore } from '@/stores/map'
import { storeToRefs } from 'pinia'
const mapStore = useMapStore()
const { locations: mapLocations } = storeToRefs(mapStore)
const selectedChangeType = ref('')
let map = null

const pacInputEl = ref(null)
const mapEl = ref(null)
const infowindowEl = ref(null)
const placeNameEl = ref(null)
const placeAddressEl = ref(null)
const type = ref('restaurants')
const rating = ref('')

const locations = {
  restaurants: [],
  hotels: [],
  attractions: []
}
const places = {
  markers: [],
  windows: []
}

const icons = {
  restaurants: 'https://cdn-icons-png.flaticon.com/24/2107/2107961.png',
  hotels: 'https://cdn-icons-png.flaticon.com/24/10/10952.png',
  attractions: 'https://cdn-icons-png.flaticon.com/24/9771/9771329.png'
}

onMounted(async () => {
  window.initMap = initMap
  await googleObject()
})
let infowindow = null

const clearPlaces = () => {
  for (let i = 0; i < places.markers.length; i++) {
    places.markers[i].setMap(null)
    places.markers[i] = null
    places.windows[i].close()
    places.windows[i] = null
  }
  places.windows.length = 0
  places.markers.length = 0
}

const initMap = () => {
  map = new window.google.maps.Map(mapEl.value, {
    center: { lat: 40.749933, lng: -73.98633 },
    zoom: 13,
    mapTypeControl: false
  })
  const options = {
    fields: ['formatted_address', 'geometry', 'name'],
    strictBounds: false,
    types: ['establishment']
  }
  const autocomplete = new google.maps.places.Autocomplete(pacInputEl.value.nativeEl, options)
  autocomplete.bindTo('bounds', map)
  infowindow = new google.maps.InfoWindow()
  const infowindowContent = infowindowEl.value

  placeNameEl.value = infowindowContent.querySelector('.title')
  placeAddressEl.value = infowindowContent.querySelector('#place-address')

  infowindow.setContent(infowindowContent)

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29)
  })

  autocomplete.addListener('place_changed', () => {
    infowindow.close()
    clearPlaces()
    marker.setVisible(false)

    const place = autocomplete.getPlace()

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'")
      return
    }

    // If the place has a geometry, then present it on a map.
    // console.log(place.geometry.viewport)
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport)
      getPlaceData({
        south: place.geometry.viewport.getSouthWest().lat(),
        west: place.geometry.viewport.getSouthWest().lng(),
        north: place.geometry.viewport.getNorthEast().lat(),
        east: place.geometry.viewport.getNorthEast().lng()
      })
    } else {
      map.setCenter(place.geometry.location)
      map.setZoom(17)
      getPlaceData({
        south: place.geometry.location.lat() - 0.1,
        west: place.geometry.location.lng() - 0.1,
        north: place.geometry.location.lat() + 0.1,
        east: place.geometry.location.lng() + 0.1
      })
    }

    marker.setPosition(place.geometry.location)
    marker.setVisible(true)

    placeNameEl.value.textContent = place.name
    placeAddressEl.value.textContent = place.formatted_address

    infowindow.open(map, marker)
    autocomplete.setTypes([])
    autocomplete.bindTo('bounds', map)
  })
}

const mapData = (data) => {
  return [
    parseFloat(data.latitude),
    parseFloat(data.longitude),
    data.name,
    data.address,
    data.rating,
    data.num_reviews,
    data.photo?.images?.small?.url
  ]
}
const getPlaceData = async (bounds) => {
  try {
    if (!bounds) return
    const { south, west, north, east } = bounds

    const promises = [
      apiAdvisor.get('/restaurants/list-in-boundary', {
        params: {
          bl_latitude: south,
          tr_latitude: north,
          bl_longitude: west,
          tr_longitude: east,
          limit: 50,
          lang: 'en_US',
          currency: 'USD'
        }
      }),
      apiAdvisor.get('/hotels/list-in-boundary', {
        params: {
          bl_latitude: south,
          tr_latitude: north,
          bl_longitude: west,
          tr_longitude: east,
          limit: 50,
          lang: 'en_US',
          currency: 'USD'
        }
      }),
      apiAdvisor.get('/attractions/list-in-boundary', {
        params: {
          bl_latitude: south,
          tr_latitude: north,
          bl_longitude: west,
          tr_longitude: east,
          limit: 50,
          lang: 'en_US',
          currency: 'USD'
        }
      })
    ]
    const results = await Promise.all(promises)
    locations.restaurants = results[0].data.data.map(mapData)

    locations.hotels = results[1].data.data.map(mapData)

    locations.attractions = results[2].data.data.map(mapData)
    showPlaces()
    // setMarkers()
  } catch (error) {
    console.log(error)
  }
}

const putMarker = (type, start) => {
  return (data, idx) => {
    const infowindow = new google.maps.InfoWindow()
    const marker = new google.maps.Marker({
      position: {
        lat: data[0],
        lng: data[1]
      },
      map,
      title: data.name,
      icon: icons[type]
    })

    marker.addListener('click', () => {
      places.windows.forEach(window => window.close())
      infowindow.setContent(`
        <div>
          <h6>${data[2]}</h3>
          <p>${data[3]}</p>
          <p>Rating: ${data[4] || '0'}, Reviews: ${data[5] || '0'}</p>
          ${
            data[6]
              ? `<img src="${data[6]}" alt="${data[2]}" />`
              : ''
          }
        </div>
      `)
      infowindow.open(map, marker)
    })
    places.markers.push(marker)
    places.windows.push(infowindow)
  }
}

const showPlaces = () => {
  clearPlaces()
  mapLocations.value[type.value] = locations[type.value]
  locations[type.value].forEach(putMarker(type.value))
  console.log(locations.value)
}

const typeOptions = [
  { label: '餐廳', value: 'restaurants' },
  { label: '飯店', value: 'hotels' },
  { label: '景點', value: 'attractions' }
]
const ratingOptions = [
  { label: '全部', value: 0 },
  { label: '3.0 以上', value: 3 },
  { label: '4.0 以上', value: 4 },
  { label: '4.5 以上', value: 4.5 }
]

</script>

<style lang="sass">
#map
  height: 100vh
</style>
