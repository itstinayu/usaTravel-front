<template>
  <h5 class="text-center q-pa-lg">會員資料</h5>
  <q-separator inset />

  <div class="q-pa-md q-gutter-xl">
    <q-table
      :rows="users"
      :columns="columns"
      row-key="_id"
      :rows-per-page-options="[4, 10]"
      :filter= "filter"
    >
      <template #body-cell-role="data">
        <q-td>
          <q-badge
            v-if=data.row.role
            outline
            color="primary"
            label="管理員"
          >
          </q-badge>
          <q-badge
            v-else
            outline
            color="accent"
            label="一般會員"
          >
          </q-badge>
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

const users = reactive([])
const filter = ref('')
const columns = [
  {
    name: 'account',
    label: '帳號',
    align: 'left',
    field: row => row.account
  },
  {
    name: 'phone',
    label: '聯絡電話',
    align: 'left',
    field: row => row.phone,
    sortable: true
  },
  {
    name: 'email',
    label: 'email',
    align: 'left',
    field: row => row.email,
    sortable: true
  },
  {
    name: 'role',
    label: '身份',
    align: 'left',
    field: row => row.role,
    sortable: true
  }
]

;
(async () => {
  try {
    const { data } = await apiAuth.get('/users/allUser')
    users.push(...data.result)
    console.log(data)
  } catch (error) {
    console.log('取得使用者失敗')
  }
})()
</script>
<style lang="sass">

</style>
