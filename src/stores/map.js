import { defineStore } from 'pinia'
import { reactive } from 'vue'

// export const useMapStore = defineStore('map', {
//   state: () => ({
//     locations: {
//       restaurants: [],
//       hotels: [],
//       attractions: []
//     }
//   })
// })
export const useMapStore = defineStore('map', () => {
  const locations = reactive({
    restaurants: [],
    hotels: [],
    attractions: []
  })

  return {
    locations
  }
})
