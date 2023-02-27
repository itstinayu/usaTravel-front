<template>
    <div class="column items-start q-pa-lg">
      <h4 class="q-pt-lg self-start">
        {{ product.name }}
      </h4>
      <div class="text-body1 q-pt-xs">
        {{ product.subtitle }}
      </div>
      <div class="q-pt-xs">
        <q-badge color="accent" text-color="white" label="熱賣中"/>
      </div>
      <div class="text-body1 text-grey q-pt-lg">
        <q-icon name="location_on"/>
        {{ product.location }}
      </div>
      <!-- carousel ------------------------------>
      <div class="row">
        <div style="width: 70vw;">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color=#fff
            padding
            arrows
            height="300px"
            navigation
            class="bg-grey-1 shadow-2 rounded-borders"
          >
            <template #navigation-icon="{ active, btnProps, onClick }">
              <q-btn
                v-bind="btnProps"
                size="xs"
                :icon="active ? 'auto_awesome' : 'circle' "
                @click="onClick"
              />
            </template>
            <q-carousel-slide v-for="images in product.images" :key="images" :name="images" :img-src="images" />
          </q-carousel>
        </div>
        <q-form @submit="submitCart">
          <q-card class="q-ml-lg fixed" align="center" style="height: 300px; border-radius: 15px;" >
            <h6 class="bg-accent text-white"  style="border-radius: 15px 15px 0 0;">立即下單</h6>
            <h4 class="q-pa-md text-h4">
              ${{ product.price }}
            </h4>
            <q-input
              v-model.number="quantity"
              type="number"
              label="數量"
              lazy-rules
              :rules="[rules.required, rules.number]"
              min="0"
              bg-color="secondary"
              filled
              class="q-pa-md"
            />
            <div class="q-pa-md">
              <q-btn label="加入購物車" type="submit" color="accent" />
            </div>
          </q-card>
        </q-form>
      </div>
      <div v-html="product.description" class="q-pt-lg"></div>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'boot/axios.js'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useUserStore } from '@/stores/user'

const $q = useQuasar()
const route = useRoute()
const router = useRouter()

const slide = ref(1)
const user = useUserStore()
const { editCart } = user

const quantity = ref(0)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}
// const products = reactive([])

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  subtitle: '',
  description: '',
  location: '',
  image: '',
  images: [],
  sell: false,
  category: ''
})

const submitCart = () => {
  editCart({ _id: product._id, quantity: quantity.value })
}

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.subtitle = data.result.subtitle
    product.description = data.result.description
    product.location = data.result.location
    product.image = data.result.image
    product.images = data.result.images
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = '購物網 | ' + product.name
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
    router.go(-1)
  }
})()
</script>
