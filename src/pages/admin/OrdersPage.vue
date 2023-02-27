<template>
  <h5 class="text-center q-pa-lg">訂單管理</h5>
  <q-separator inset />
  <div class="q-pa-md q-gutter-xl">
    <q-table
      :rows="orders"
      :columns="columns"
      row-key="_id"
      :rows-per-page-options="[4, 10]"
      :filter= "filter"
    >
      <template #body-cell-name="data">
        <q-td >
          <ul>
            <li v-for="product in data.row.products" :key="product._id">
              • {{product.p_id.name + 'x' +product.quantity}}
            </li>
          </ul>
        </q-td>
      </template>
      <template #body-cell-delete="data" >
        <q-td>
          <q-btn round color="accent" icon="delete" @click="deleteOrder(data.row._id)" />
        </q-td>
      </template>
      <template v-slot:top-right>
        <q-td>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-td>
      </template>

    </q-table>
  </div>
</template>

<script setup>
import { apiAuth } from 'boot/axios.js'
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const orders = reactive([])
const filter = ref('')
const columns = [
  {
    name: 'user',
    label: '下單會員',
    align: 'left',
    field: row => row.u_id.account,
    sortable: true
  },
  {
    name: 'name',
    label: '商品名稱',
    align: 'left',
    field: row => row._id,
    sortable: true
  },
  {
    name: 'id',
    label: '訂單編號',
    align: 'left',
    field: row => row._id
  },
  {
    name: 'date',
    label: '下單日期',
    align: 'left',
    field: row => new Date(row.date).toLocaleDateString(),
    sortable: true
  },
  {
    name: 'totalPrice',
    label: '總金額',
    align: 'left',
    field: row => row.totalPrice,
    sortable: true
  },
  {
    name: 'delete',
    label: '刪除',
    align: 'left',
    field: row => row.delete
  }
]
const deleteOrder = async (_id) => {
  try {
    await apiAuth.patch('/orders/delete/' + _id, {
      status: 1
    })
    const index = orders.findIndex(item => item._id === _id)
    orders.splice(index, 1)
    $q.notify(
      {
        position: 'center',
        color: 'positive',
        message: '刪除成功',
        icon: 'check_circle',
        timeout: 2000
      }
    )
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
;
(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
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
