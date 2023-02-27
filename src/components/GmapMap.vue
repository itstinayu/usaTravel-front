<template>
  <div class="map-container">
    <GmapMap
      :center="center"
      :zoom="14"
      :options="options"
      @center_changed="onCenterChanged"
      @bounds_changed="onBoundsChanged"
      @click="onMapClick"
    >
      <GmapMarker
        :key="place.id"
        v-for="place in places"
        :position="place.location"
        @click="onMarkerClick(place)"
      >
        <GmapInfoWindow>
          <div class="info-window">
            <h3 class="info-window-title">{{ place.name }}</h3>
            <img
              class="info-window-image"
              :src="place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'"
            />
            <q-rating
              class="info-window-rating"
              :value="place.rating"
              :max="5"
              readonly
              color="warning"
              size="sm"
            />
          </div>
        </GmapInfoWindow>
      </GmapMarker>
      <GmapMarker
        :key="i"
        v-for="(data, i) in weatherData.list"
        :position="{ lat: data.coord.lat, lng: data.coord.lon }"
      >
        <GmapInfoWindow>
          <img
            class="weather-icon"
            :src="'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'"
          />
        </GmapInfoWindow>
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { GmapMap, GmapMarker, GmapInfoWindow } from 'vue3-google-maps'
import mapStyles from '../../mapStyles'

export default {
  components: { GmapMap, GmapMarker, GmapInfoWindow },
  props: {
    coords: Object,
    places: Array,
    weatherData: Object,
    setCoords: Function,
    setBounds: Function,
    setChildClicked: Function
  },
  setup (props) {
    const { $q } = useQuasar()

    const center = ref(props.coords)
    const options = {
      disableDefaultUI: true,
      zoomControl: true,
      styles: mapStyles
    }

    const onCenterChanged = (event) => {
      const lat = event.lat()
      const lng = event.lng()
      props.setCoords({ lat, lng })
    }

    const onBoundsChanged = (event) => {
      const ne = {
        lat: event.getNorthEast().lat(),
        lng: event.getNorthEast().lng()
      }
      const sw = {
        lat: event.getSouthWest().lat(),
        lng: event.getSouthWest().lng()
      }
      props.setBounds({ ne, sw })
    }

    const onMapClick = (event) => {
      $q.notify({
        color: 'negative',
        icon: 'warning',
        message: 'You cannot add places to the map yet'
      })
    }

    const onMarkerClick = (place) => {
      props.setChildClicked(place)
    }

    return {
      center,
      options,
      onCenterChanged,
      onBoundsChanged,
      onMapClick,
      onMarkerClick
    }
  }
}
</script>

<style lang="sass">
.map-container
  height: 100%;
  width: 100%;

.info-window
  display: flex
  flex-direction: column
  align-items: center

  .info-window-title
    font-size: 1.2rem
    margin-bottom: 0.5rem

  .info-window-image
    width: 100%
    height: auto
    margin-bottom: 0.5rem

  .info-window-rating
    margin-top: 0.5rem
    font-size: 1.2rem

.weather-icon
  width: 50px
  height: 50px

</style>
