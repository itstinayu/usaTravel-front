<template>
  <h3 class="text-center q-pa-lg">
    美國自由行攻略
  </h3>
  <q-separator inset />
  <div class="text-center ">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="q-pa-md q-gutter-y-md column flex justify-center items-center">
          <q-tabs v-model="tab">
            <q-tab v-for="tab in tabs" :key="tab.name" v-bind="tab" />
          </q-tabs>
        </div>
        <q-expansion-item
          v-for="(guide, index) in filteredGuides"
          :key="index"
          class="shadow-1 overflow-hidden q-ma-lg"
          style="border-radius: 30px"
          :label="guide.title"
          icon="explore"
          header-class="bg-accent text-white"
          expand-icon-class="text-white"
        >
          <GuideCard v-bind="guide" @archive="changeArchive(guide)" />
        </q-expansion-item>
      </div>
    </div>
  </div>
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { api } from 'boot/axios.js'
import { useQuasar } from 'quasar'
import GuideCard from 'components/GuideCard.vue'

const $q = useQuasar()

const guides = reactive([])
const tab = ref('行前準備')
const tabs = [
  { name: '行前準備', label: '行前準備' },
  { name: '注意事項', label: '注意事項' },
  { name: '交通資訊', label: '交通資訊' },
  { name: '景點介紹', label: '景點介紹' }
]

const filteredGuides = computed(() => {
  return guides.filter(guide => guide.category === tab.value)
})

const changeArchive = (guide) => {
  const idx = guides.indexOf(guide)
  console.log(idx)
  guides[idx].archive = !guides[idx].archive
}

(async () => {
  try {
    const { data } = await api.get('/guides')
    guides.push(...data.result)
  } catch (error) {
    $q.notify(
      {
        position: 'center',
        color: 'negative',
        message: '失敗',
        icon: 'check_circle',
        timeout: 2000
      }
    )
  }
})()
</script>
