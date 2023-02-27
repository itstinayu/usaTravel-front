<template>
  <q-card>
    <q-card-section class="text-left">
      <div class="text-subtitle1 ">
        {{ subtitle }}
      </div>
      <q-img :src="image" width="350px" full-height />
      <div v-html="description" />
    </q-card-section>
    <q-card-actions align="center">
      <q-btn flat color="primary" :icon="active ? 'bookmark' : 'bookmark_border'" @click="changeArchive">
        {{ active ? '取消收藏' : '收藏文章' }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  // eslint-disable
  _id: {
    type: String,
    default: ''
  },
  // eslint-enable
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  },
  archive: {
    type: Boolean,
    default: false
  }
})

const user = useUserStore()
const { editArchive } = user
const { archive } = storeToRefs(user)

const changeArchive = async () => {
  await editArchive(props._id)
}

const active = computed(() => {
  return archive.value.includes(props._id)
})
</script>
