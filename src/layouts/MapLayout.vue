<template>
  <q-layout view="hHh Lpr lff" container style="height: 1080px" class="overflow-hidden shadow-2 rounded-borders">
    <q-header elevated class="primary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-btn round dense flat :ripple="false" size="19px" color="white" class="q-mr-sm" no-caps to="/" >
          <q-img src="../assets/statue-of-liberty.png" width="48px" class="logo"/>
        </q-btn>
        <q-toolbar-title>{{ user.account }}的地圖快搜</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 100px; border-right: 1px solid #ddd">
        <q-list padding>
          <h6 align="center">地點評價探索</h6>
            <q-list bordered class="q-my-md">
              <q-item v-for="(location, index) in filtered" :key="index">
                <PlaceCard
                  :name="location[2]"
                  :photo="location[6]"
                  :rating="location[4]"
                  :numReviews="location[5]"
                  :address="location[3]"
                />
              </q-item>
            </q-list>

        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://picsum.photos/300/200/?random=10" style="height: 100px">
        <div class="absolute-bottom bg-transparent" clickable>
          <div class="text-weight-bold" :title="account">
            <strong>{{ user.account }}</strong>
          </div>
          <div>{{ user.email }}</div>
        </div>
      </q-img>
    </q-drawer>
      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
  </q-layout>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useMapStore } from '@/stores/map'
import { ref, computed } from 'vue'
import PlaceCard from '../components/PlaceCard.vue'
const drawer = ref(false)

const user = useUserStore()
const { account } = storeToRefs(user)

const mapStore = useMapStore()

const type = ref('restaurants')
const rating = ref(0)

// const locations = reactive({
//   restaurants: [],
//   hotels: [],
//   attractions: []
// })
const filtered = computed(() => {
  return mapStore.locations[type.value].filter(location => {
    return rating.value === 0 ? true : location?.[4] >= rating.value
  })
})
</script>

<style lang="sass">

</style>
