<template>
  <div class="window-height row justify-center items-center">
    <q-card class="q-pa-md" style="width: 500px;">
      <h4 class="text-center q-ma-md">
        註冊會員
      </h4>
      <q-form
        class="q-gutter-xs"
        @submit="register"
        @reset="onReset"
      >
        <q-input
          v-model="form.email"
          filled
          label="信箱"
          lazy-rules
          :rules="[ rules.email, rules.required]"
        />
        <q-input
          v-model="form.phone"
          filled
          label="電話"
          lazy-rules
          :rules="[ rules.required]"
        />

        <q-input
          v-model="form.account"
          filled
          label="帳號"
          maxlength="20"
          lazy-rules
          :rules="[
            rules.required, rules.length
          ]"
        />
        <q-input
          v-model="form.password"
          filled
          type="password"
          label="密碼"
          maxlength="20"
          lazy-rules
          :rules="[
            rules.required, rules.length
          ]"
        />
        <q-input
          v-model="form.passwordConfirm"
          filled
          type="password"
          label="確認密碼"
          maxlength="20"
          lazy-rules
          :rules="[
            rules.required, rules.length, rules.passwordConfirm
          ]"
        />
        <div class="text-center q-pt-lg">
          <q-btn label="重新編輯" type="reset" color="primary" flat class="q-ml-sm" @click="onReset" />
          <q-btn label="確認" type="submit" color="primary" @click="showLoading" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeUnmount } from 'vue'
import validator from 'validator'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = useQuasar()
const timer = ref(1)

onBeforeUnmount(() => {
  if (timer.value !== void 0) {
    clearTimeout(timer)
    loading.loading.hide()
  }
})
const showLoading = () => {
  loading.loading.show({
    message: 'Some important process  is in progress. Hang on...'
  })
  timer.value = setTimeout(() => {
    loading.loading.hide()
    timer.value = void 0
  }, 3000)
}

const form = reactive({
  account: '',
  phone: '',
  password: '',
  passwordConfirm: '',
  email: ''
})

const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  },
  passwordConfirm (value) {
    return (value === form.password) || '密碼不一致'
  }
}
const onReset = async () => {
  form.email = null
  form.phone = null
  form.account = null
  form.password = null
  form.passwordConfirm = null
}

const register = async () => {
  try {
    await api.post('/users', form)
    showLoading()
    timer.value = setTimeout(() => {
      loading.notify(
        {
          position: 'center',
          color: 'positive',
          message: '註冊成功',
          icon: 'check_circle',
          timeout: 2000
        }
      )
    }, 2000)
    router.push('/login')
  } catch (error) {
    showLoading()
    timer.value = setTimeout(() => {
      loading.notify(
        {
          position: 'center',
          color: 'negative',
          message: error?.response?.data?.message,
          icon: 'report_problem',
          timeout: 2000
        }
      )
    }, 3000)
  }
}
</script>

<style lang="sass" scoped>
</style>
