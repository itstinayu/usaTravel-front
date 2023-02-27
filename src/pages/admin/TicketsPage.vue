<template>
  <h5 class="text-center q-pa-lg">
    票券管理
  </h5>
  <q-separator inset />
  <div class="row justify-start q-pa-md">
    <q-btn color="accent" text-color="white" label="新增票券" @click="openDialog(-1)" />
  </div>
  <q-dialog v-model="form.dialog" persistent>
    <q-card class="my-card" style="min-width: 600px">
      <q-form @submit="submit">
        <q-card-section class="bg-secondary">
          <div class="text-h6 text-center">
            {{ form._id.length > 0 ? '編輯票券' : '新增票券' }}
          </div>
        </q-card-section>
        <q-card-section class="flex justify-center items-center row ">
          <q-input
            v-model="form.name"
            outlined
            type="text"
            label="票券名稱"
            :rules="[rules.required]"
            lazy-rules
            class="col-6 q-pa-md"
            color="primary"
          />
          <q-input
            v-model="form.price"
            outlined
            type="number"
            label="票券價格"
            :rules="[rules.required, rules.price]"
            lazy-rules
            class="col-6 q-pa-lg"
            min="0"
          />
          <q-select
            v-model="form.category"
            :options="categories"
            :rules="[rules.required]"
            label="票券分類"
            lazy-rules
            class="col-12 q-pa-md"
            outlined
          />
          <q-input
            v-model="form.location"
            outlined
            autogrow
            type="textarea"
            label="票券地點"
            :rules="[rules.required]"
            lazy-rules
            class="col-12 q-pa-md"
          />
          <q-input
            v-model="form.subtitle"
            outlined
            autogrow
            type="textarea"
            label="票券副標題"
            :rules="[rules.required]"
            lazy-rules
            class="col-12 q-pa-md"
          />
          <q-editor
            v-model="form.description"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify']
                }
              ],
              ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: [
                    'p',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'code'
                  ]
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7'
                  ]
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana'
                  ]
                },
                'removeFormat'
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource']
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana'
            }"
          />
          <q-file
            v-model="form.image"
            class="col-12 q-pa-md justify-center"
            removable
            label="選擇圖片"
            outlined
            use-chips
          >
            <template #prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <div class="row q-pa-md">
            <q-card class="my-card col" flat bordered>
              <q-img :src="form.image" width="100px" />
            </q-card>
          </div>
          <q-file
            v-model="form.images"
            class="col-12 q-pa-md justify-center"
            removable
            multiple=""
            label="選擇多張圖片"
            outlined
            use-chips
          >
            <template #prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <div class="row q-pa-md">
            <q-card v-for=" images in form.images" :key="images" class="my-card col" flat bordered>
              <q-img :src="images" width="100px" />
            </q-card>
          </div>
          <q-checkbox v-model="form.sell" label="上架" class="col-12 q-pa-md justify-center" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary q-pa-md">
          <q-btn v-close-popup flat label="取消" :disable="form.loading" />
          <q-btn flat label="送出" type="submit" :loading="form.loading" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>

  <div class="q-pa-md q-gutter-xl">
    <q-table
      :rows="products"
      :columns="columns"
      row-key="_id"
      :rows-per-page-options="[4, 10]"
      :filter="filter"
    >
      <template #body-cell-image="data">
        <q-td>
          <q-img
            style="height: 120px"
            :src="data.row.image"
          />
        </q-td>
      </template>

      <template #top-right>
        <q-td>
          <q-input v-model="filter" borderless dense debounce="300" placeholder="Search">
            <template #append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-td>
      </template>
      <template #body-cell-sell="data">
        <q-td>
          <q-badge
            v-if="data.row.sell"
            color="primary"
            label="上架中"
          />
          <q-badge
            v-else
            color="accent"
            label="已下架"
          />
        </q-td>
      </template>
      <template #body-cell-edit="data">
        <q-td>
          <q-btn round color="primary" icon="edit" @click="openDialog(products.indexOf(data.row))" />
        </q-td>
      </template>

      <template #body-cell-delete="data">
        <q-td>
          <q-btn round color="accent" icon="delete" @click="deleteProduct(data.row._id)" />
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

const categories = ['景點', '戶外＆活動', '文化體驗', '展演活動', '旅遊通票', '行程', '其他']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}
const products = reactive([])
const filter = ref('')
const columns = [
  {
    name: 'image',
    label: '圖片',
    align: 'left',
    field: row => row.image
  },
  {
    name: 'name',
    label: '名稱',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'price',
    label: '價格',
    align: 'left',
    field: row => row.price,
    sortable: true
  },
  {
    name: 'category',
    label: '種類',
    align: 'left',
    field: row => row.category
  },
  {
    name: 'sell',
    label: '上架狀態',
    align: 'left',
    field: row => row.sell,
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯',
    align: 'left',
    field: row => row.edit
  },
  {
    name: 'delete',
    label: '刪除',
    align: 'left',
    field: row => row.delete
  }
]
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  subtitle: '',
  description: '',
  image: undefined,
  images: [],
  sell: false,
  category: '',
  location: '',
  loading: '',
  dialog: false,
  idx: -1
})
const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.subtitle = ''
    form.description = ''
    form.location = ''
    form.image = undefined
    form.images = []
    form.sell = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.subtitle = products[idx].subtitle
    form.description = products[idx].description
    form.location = products[idx].location
    form.image = products[idx].image
    form.images = products[idx].images
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}
const submit = async () => {
  form.loading = true
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('subtitle', form.subtitle)
  fd.append('description', form.description)
  fd.append('location', form.location)
  fd.append('image', form.image)
  // 用迴圈去跑抓到陣列的每一筆
  for (const i of form.images) {
    fd.append('images', i)
  }
  fd.append('sell', form.sell)
  fd.append('category', form.category)
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      $q.notify(
        {
          position: 'center',
          color: 'positive',
          message: '新增成功',
          icon: 'check_circle',
          timeout: 2000
        }
      )
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
      $q.notify(
        {
          position: 'center',
          color: 'positive',
          message: '編輯成功',
          icon: 'check_circle',
          timeout: 2000
        }
      )
    }
    form.dialog = false
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
const deleteProduct = async (_id) => {
  try {
    await apiAuth.patch('/products/delete/' + _id, {
      status: 1
    })
    const index = products.findIndex(item => item._id === _id)
    products.splice(index, 1)
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
};
(async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    console.log('取得商品失敗')
  }
})()
</script>
<style lang="sass">

</style>
