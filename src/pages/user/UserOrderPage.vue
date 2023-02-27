<template>
  <h5 class="text-center q-pa-lg">訂單頁面</h5>
  <q-separator inset />
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="order in orders" :key="order._id" class="my-card col" flat bordered >
      <q-card-section class="q-pa-md">
        <div class="text-overline">
          訂單編號：{{ order.u_id }}
        </div>
        <div class="text-caption text-grey">下單日期：{{ new Date(order.date).toLocaleDateString() }}</div>
        <div v-for="product in order.products" :key="product._id" class="text-overline q-mt-sm q-mb-xs ">
          <q-img :src="product.p_id.image" style="width: 50px;"></q-img>
          {{ product.p_id.name + ' x ' +product.quantity }}
        </div>
        <div class="text-h5" align="right">總共: ${{ order.totalPrice }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="q-pa-md" align="right">
        <q-btn flat color="primary" to="/tickets">
          再買一次
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { apiAuth } from 'boot/axios.js'
import { reactive } from 'vue'
// import { useUserStore } from 'src/stores/user.js'
import { useQuasar } from 'quasar'
// const user = useUserStore()

const $q = useQuasar()

const orders = reactive([]);
(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    $q.notify(
      {
        position: 'center',
        color: 'negative',
        message: '取得訂單失敗',
        icon: 'check_circle',
        timeout: 2000
      }
    )
  }
})()
</script>
