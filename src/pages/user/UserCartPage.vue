<template>
  <h5 class="text-center q-pa-lg">購物車</h5>
  <q-separator inset />
  <div class="q-pa-md q-gutter-xl">
    <q-table
      :rows="cart"
      :columns="columns"
      row-key="_id"
      :rows-per-page-options="[4, 10]"
      :filter= "filter"
      no-data-label="沒有商品"
      :class="bg-accent"
    >
    <template #body-cell-image="data">
      <q-td>
        <q-img
          style="height: 120px"
          :src="data.row.p_id.image"
        />
      </q-td>
    </template>

    <template #body-cell-edit="data" >
      <q-td>
        <q-btn flat round color="primary" icon="remove" @click="updateCart(data.row._id, -1)" />
        &nbsp;{{ data.row.quantity }}&nbsp;
        <q-btn flat round color="primary" icon="add" @click="updateCart(data.row._id, 1)" />
      </q-td>
    </template>

    <template #body-cell-delete="data">
      <q-td>
        <q-btn round color="negative" label="刪除" @click="updateCart(data.row._id, 0)" />
      </q-td>
    </template>
    <template v-slot:no-data="{ message }">
      <q-td>
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            {{ message }}
          </span>
        </div>
      </q-td>
    </template>
    <template #body-cell-state="data">
      <q-td>
        <q-badge
          v-if=data.row.p_id.sell
          outline
          color="primary"
          label="已上架"
        >
        </q-badge>
        <q-badge
          v-else
          outline
          label="已下架"
          color="accent"
        >
        </q-badge>
      </q-td>
    </template>
    </q-table>
    <div class="row justify-end">
      <div class="col-10 text-right">
        <h6 class="q-ma-none">總金額: ${{ totalPrice }}</h6>
      </div>
      <div class="col-2 text-right">
        <q-btn color="positive" label="結帳" :disabled="!canCheckout" @click="onCheckoutBtnClick"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { apiAuth } from 'boot/axios.js'
import { useUserStore } from 'src/stores/user.js'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()

const user = useUserStore()
const { editCart, checkout } = user

const $q = useQuasar()
const cart = reactive([])
const columns = [
  {
    name: 'image',
    label: '圖片',
    align: 'left',
    field: row => row.p_id.image
  },
  {
    name: 'name',
    label: '名稱',
    align: 'left',
    field: row => row.p_id.name,
    sortable: true
  },
  {
    name: 'price',
    label: '單價',
    align: 'left',
    field: row => row.p_id.price,
    sortable: true
  },
  {
    name: 'quantity',
    label: '數量',
    align: 'left',
    field: row => row.quantity
  },
  {
    name: 'edit',
    label: '編輯',
    align: 'left',
    field: row => row.sell
  },
  {
    name: 'total',
    label: '小計',
    align: 'left',
    field: row => (row.quantity * row.p_id.price),
    sortable: true
  },
  {
    name: 'state',
    label: '狀態',
    align: 'left',
    field: row => row.state,
    sortable: true
  },
  {
    name: 'delete',
    label: '刪除',
    align: 'left',
    field: row => row.delete
  }
]
const updateCart = async (id, quantityEdit) => {
  const idx = cart.findIndex(item => item._id === id)
  const quantity = quantityEdit === 0 ? -cart[idx].quantity : quantityEdit
  await editCart({ _id: cart[idx].p_id._id, quantity })
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + (current.p_id.price * current.quantity)
  }, 0)
})

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(product => {
    return !product.p_id.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
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
