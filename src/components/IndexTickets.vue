<template>
  <q-card class="my-card" style="height: 250px">
    <router-link :to="'/ticket/' + _id">
      <q-img :src="image" style="height: 150px"/>
    </router-link>
    <q-card-actions align="right">
      <div class="text-overline">
        {{ name }}
      </div>
      <q-btn flat round color="accent" icon="add" @click="editCart({_id, quantity: 1})"/>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

defineProps({
  // eslint-disable
  _id: {
    type: String,
    default: ''
  },
  // eslint-enable
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
const { editCart } = user
</script>
