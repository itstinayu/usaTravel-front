<template>
  <h5 class="text-center q-pa-lg">文章管理</h5>
  <q-separator inset />
  <div class="row justify-start q-pa-md">
    <q-btn color="accent" text-color="white" label="新增文章" @click="openDialog(-1)" />
  </div>
  <q-dialog v-model="form.dialog" persistent>
    <q-card class="my-card" style="min-width: 600px">
      <q-form @submit="submit" >
        <q-card-section class="bg-secondary" >
          <div class="text-h6 text-center">
            {{ form._id.length > 0 ? '編輯文章' : '新增文章' }}
          </div>
        </q-card-section>
        <q-card-section class="flex justify-center items-center row ">
          <q-input
            v-model="form.title"
            outlined
            type="text"
            label="文章標題"
            :rules="[rules.required]"
            lazy-rules
            class="col-12 q-pa-md"
          />
          <q-input
            v-model="form.subtitle"
            outlined
            type="text"
            label="文章副標題"
            lazy-rules
            class="col-12 q-pa-md"
          />
          <q-select
            v-model="form.category"
            :options="categories"
            :rules="[rules.required]"
            label="文章分類"
            lazy-rules
            class="col-12 q-pa-md"
            outlined
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
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
          </q-file>
          <div class="row q-pa-md">
            <q-card class="my-card col" flat bordered >
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
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
          </q-file>
          <div class="row q-pa-md">
            <q-card v-for=" images in form.images" :key="images" class="my-card col" flat bordered >
              <q-img :src="images" width="100px" />
            </q-card>
          </div>
          <q-checkbox v-model="form.sell" label="文章發布" class="col-12 q-pa-md justify-center"/>
        </q-card-section>
        <q-card-actions align="right" class="text-primary q-pa-md">
          <q-btn flat label="取消" v-close-popup :disable="form.loading"/>
          <q-btn flat label="送出" type="submit" :loading="form.loading"/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>

    <div class="q-pa-md q-gutter-xl">
    <q-table
      :rows="guides"
      :columns="columns"
      row-key="_id"
      :rows-per-page-options="[4, 10]"
      :filter= "filter"
    >
    <template #body-cell-sell="data">
      <q-td>
        <q-badge
          v-if=data.row.sell
          color="primary"
          label="發布中"
        >
        </q-badge>
        <q-badge
          v-else
          color="accent"
          label="未發布"
        >
        </q-badge>
      </q-td>
      </template>
      <template #body-cell-image="data">
        <q-td>
          <q-img
          style="height: 120px"
          :src="data.row.image"
        />
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

      <template #body-cell-edit="data" >
        <q-td>
          <q-btn round color="primary" icon="edit" @click="openDialog(guides.indexOf(data.row))" />
        </q-td>
      </template>

      <template #body-cell-delete="data" >
        <q-td>
          <q-btn round color="accent" icon="delete" @click="deleteGuide(data.row._id)" />
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

const categories = ['行前準備', '注意事項', '交通資訊', '景點介紹']

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}
const guides = reactive([])
const filter = ref('')

const columns = [
  {
    name: 'image',
    label: '圖片',
    align: 'left',
    field: row => row.image
  },
  {
    name: 'title',
    label: '標題',
    align: 'left',
    field: row => row.title,
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
    label: '發佈狀態',
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
  title: '',
  subtitle: '',
  description: '',
  image: undefined,
  images: [],
  sell: false,
  category: '',
  loading: '',
  dialog: false,
  idx: -1
})
const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.title = ''
    form.subtitle = ''
    form.description = ''
    form.image = undefined
    form.images = []
    form.sell = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = guides[idx]._id
    form.title = guides[idx].title
    form.subtitle = guides[idx].subtitle
    form.description = guides[idx].description
    form.image = guides[idx].image
    form.images = guides[idx].images
    form.sell = guides[idx].sell
    form.category = guides[idx].category
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}
const submit = async () => {
  form.loading = true
  const fd = new FormData()
  fd.append('title', form.title)
  fd.append('subtitle', form.subtitle)
  fd.append('description', form.description)
  fd.append('image', form.image)
  // 用迴圈去跑抓到陣列的每一筆
  for (const i of form.images) {
    fd.append('images', i)
  }
  fd.append('sell', form.sell)
  fd.append('category', form.category)
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/guides', fd)
      guides.push(data.result)
      $q.notify(
        {
          position: 'center',
          color: 'positive',
          message: '文章新增成功',
          icon: 'check_circle',
          timeout: 2000
        }
      )
    } else {
      const { data } = await apiAuth.patch('/guides/' + form._id, fd)
      guides[form.idx] = data.result
      $q.notify(
        {
          position: 'center',
          color: 'positive',
          message: '文章編輯成功',
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
const deleteGuide = async (_id) => {
  try {
    await apiAuth.patch('/guides/delete/' + _id, {
      status: 1
    })
    const index = guides.findIndex(item => item._id === _id)
    guides.splice(index, 1)
    $q.notify(
      {
        position: 'center',
        color: 'positive',
        message: '文章刪除成功',
        icon: 'check_circle',
        timeout: 2000
      }
    )
  } catch (error) {
    $q.notify(
      {
        position: 'center',
        color: 'negative',
        message: '文章刪除失敗',
        icon: 'check_circle',
        timeout: 2000
      }
    )
  }
};
(async () => {
  try {
    const { data } = await apiAuth.get('/guides/all')
    guides.push(...data.result)
  } catch (error) {
    console.log('取得文章失敗')
  }
})()
</script>

<style lang="sass">

</style>
