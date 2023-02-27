<template>
  <q-card>
    <q-img
      :src="photo"
      :alt="photo"
      style="height: 100px"
    />
    <q-card-section>
      <q-item-label header class="text-h5">{{ name }}</q-item-label>
      <div class="q-mt-md">
        <q-item-label caption>
          {{ numReviews }} review{{ numReviews > 1 ? 's' : '' }}
        </q-item-label>
      </div>
      <q-item-label>
        <div class="row items-center">
          <q-item-label header>Ranking</q-item-label>
          <q-item-label caption>{{ rating }}</q-item-label>
        </div>
        <q-item-label caption v-if="address">
          <q-icon name="location_on" class="q-mr-sm" />
          {{ address }}
        </q-item-label>
      </q-item-label>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn label="Trip Advisor" color="primary" @click="openTripAdvisor" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  name: String,
  photo: String,
  rating: Number,
  numReviews: Number,
  address: String
})

const { name, photo, rating, numReviews, address } = toRefs(props)

const openTripAdvisor = () => {
  window.open('https://www.tripadvisor.com/')
}
</script>
