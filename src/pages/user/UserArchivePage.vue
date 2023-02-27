<template>
  <h3 class="text-center q-pa-lg">會員典藏頁</h3>
  <q-separator inset />
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="我的票券收藏" label="我的票券收藏" />
          <q-tab name="我的文章收藏" label="我的文章收藏" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="我的票券收藏">
            <div class="text-center">
              <div class="row">
                <div v-for="product in products" :key="product._id" class="col-4 q-pa-md" >
                  <ProductCard v-bind="product" @click="changeProductArchive({_id: product._id})" ></ProductCard>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="我的文章收藏">
            <q-expansion-item
              v-for="(guide, index) in guides"
              :key="index"
              class="shadow-1 overflow-hidden q-ma-lg"
              style="border-radius: 30px"
              :label="guide.title"
              icon="explore"
              header-class="bg-primary text-white"
              expand-icon-class="text-white"
            >
              <GuideCard v-bind="guide" @click="changeArchive({_id: guide._id})"></GuideCard>
            </q-expansion-item>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from 'boot/axios.js'
import { useQuasar } from 'quasar'
import ProductCard from 'components/TicketCard.vue'
import GuideCard from 'components/GuideCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const $q = useQuasar()
const tab = ref('我的票券收藏')
const products = reactive([])
const guides = reactive([])

;(async () => {
  try {
    const { data } = await apiAuth.get('/users/productArchive')
    const { data: data2 } = await apiAuth.get('/users/productArchive')
    products.push(...data.result.map(product => {
      product.productArchive = data2.result.includes(product._id)
      return product
    }))
  } catch (error) {
    $q.notify(
      {
        position: 'center',
        color: 'negative',
        message: 'productArchive失敗',
        icon: 'check_circle',
        timeout: 2000
      }
    )
  }
})()
;(async () => {
  try {
    const { data } = await apiAuth.get('/users/archive')
    const { data: data2 } = await apiAuth.get('/users/archive')
    guides.push(...data.result.map(guide => {
      guide.archive = data2.result.includes(guide._id)
      return guide
    }))
  } catch (error) {
    $q.notify(
      {
        position: 'center',
        color: 'negative',
        message: 'archive失敗',
        icon: 'check_circle',
        timeout: 2000
      }
    )
  }
})()
const changeProductArchive = (_id) => {
  try {
    const index = products.findIndex((item) => item._id === _id._id)
    // console.log(index)
    if (index !== -1) {
      products.splice(index, 1)
      $q.notify(
        {
          position: 'center',
          color: 'positive',
          message: '成功編輯收藏',
          icon: 'check_circle',
          timeout: 2000
        }
      )
      router.push('/user/archive')
    }
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
}

const changeArchive = (_id) => {
  try {
    const index = guides.findIndex((item) => item._id === _id._id)
    if (index !== -1) {
      guides.splice(index, 1)
      // console.log(_id)
      $q.notify(
        {
          position: 'center',
          color: 'positive',
          message: '成功編輯收藏',
          icon: 'check_circle',
          timeout: 2000
        }
      )
    }
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
}
</script>
