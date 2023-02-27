<!-- <template>
  <h5 class="text-center q-pa-lg">
    體驗行程探索
  </h5>
  <q-separator inset />
  <div class="row option_side">
    <div class="col-lg-3 col-md-4">
      <div class="q-pa-md">
        <div class="fixed" style="width: 150px;">
          <h6 class="q-pl-sm bg-primary text-white ">
            票券類別篩選
          </h6>
          <q-card bordered flat style="border-radius: 0; border-color: #88CAD9; height: 520px;">
            <q-option-group
              v-model="checkedCategories"
              :options="options"
              type="checkbox"
              class="outlined q-pa-xs"
            />
            <q-separator inset />
          </q-card>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-9 col-md-8">
    <div class="text-center">
      <div class="row q-col-gutter-md">
        <div v-for="product in filteredProducts" :key="product._id" class="q-pa-md" :cols="12" :sm-cols="6" :md-cols="4" :lg-cols="3">
          <ProductCard v-bind="product" @archive="changeProductArchive(product)" />
        </div>
      </div>
    </div>
  </div>

  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
</template> -->
<template>
  <h5 class="text-center q-pa-lg">
    體驗行程探索
  </h5>
  <q-separator inset />

  <div class="row">
    <!-- left column for options -->
    <div class="col-lg-1 col-md-2 col-sm-4 col-xs-6">
      <div class="q-pa-md">
        <div class="fixed" style="width: 150px;">
          <h6 class="q-pl-sm bg-primary text-white">
            票券類別篩選
          </h6>
          <q-card bordered flat style="border-radius: 0; border-color: #88CAD9; height: 480px;">
            <q-option-group
              v-model="checkedCategories"
              :options="options"
              type="checkbox"
              class="outlined q-pa-xs"
            />
            <q-separator inset />
          </q-card>
        </div>
      </div>
    </div>

    <!-- right column for products -->
    <div class="col-lg-11 col-md-10 col-sm-8 col-xs-6 q-pa-md">
      <div class="text-center">
        <div class="row q-col-gutter-md">
          <div
            v-for="product in filteredProducts"
            :key="product._id"
            class="q-pa-md"
            :cols="12"
            :sm-cols="6"
            :md-cols="4"
            :lg-cols="3"
          >
            <ProductCard v-bind="product" @archive="changeProductArchive(product)" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { api } from 'boot/axios.js'
import { useQuasar } from 'quasar'
import ProductCard from 'components/TicketCard.vue'

const $q = useQuasar()
const checkedCategories = ref([])
const options = [
  { label: '景點', value: '景點' },
  { label: '戶外＆活動', value: '戶外＆活動' },
  { label: '文化體驗', value: '文化體驗' },
  { label: '展演活動', value: '展演活動' },
  { label: '旅遊通票', value: '旅遊通票' },
  { label: '行程', value: '行程' }
]
const products = reactive([])

const filteredProducts = computed(() => {
  if (checkedCategories.value.length === 0) {
    return products
  } else {
    return products.filter(product => {
      return checkedCategories.value.includes(product.category)
    })
  }
})
const changeProductArchive = (product) => {
  const idx = products.indexOf(product)
  // console.log(idx)
  products[idx].productArchive = !products[idx].productArchive
}
;(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
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
