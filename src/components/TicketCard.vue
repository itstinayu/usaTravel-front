<template>
  <q-card class="my-card" style="height: 450px; width: 280px;">
    <q-img :src="image" style="height: 150px;" />
    <!-- </q-card-section> -->
    <q-card-section style="height: 150px">
      <div class="row items-center">
        <div class="col text-h6 link-name">
          <router-link :to="'/ticket/' + _id" class="text-black q-pa-md">
            {{ name }}
          </router-link>
          <div class="text-body1 text-grey">
            {{ subtitle }}
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="text-h4 text-accent">
        $ {{ price }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="center" class="q-py-md">
      <q-btn flat color="accent" :icon="active ? 'bookmark' : 'bookmark_border'" @click="changeProductArchive">
        {{ active ? '取消收藏' : '收藏票券' }}
      </q-btn>
      <q-btn color="accent" icon="add" @click="editCart({_id, quantity: 1})">
        加入購物車
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const props = defineProps({
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
  subtitle: {
    type: String,
    required: [true, '缺少狀態']
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
  },
  location: {
    type: String,
    required: [true, '缺少狀態']
  },
  productArchive: {
    type: Boolean,
    default: false
  }
})

const user = useUserStore()
const { editCart, editProductArchive } = user
const { productArchive } = storeToRefs(user)

const changeProductArchive = async () => {
  await editProductArchive(props._id)
}

const active = computed(() => {
  return productArchive.value.includes(props._id)
})
</script>

<style lang="sass">
.link-name a
  text-decoration: none
  color: $primary
  padding: 0
</style>
