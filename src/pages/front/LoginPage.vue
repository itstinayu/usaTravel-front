<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="q-pa-md" style="width: 500px;">
      <h4 class="text-center q-pb-md">
        登入會員
      </h4>
      <q-form
        class="q-gutter-md "
        @submit="login"
      >
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
        <q-btn v-if="!isLogin" flat style="color: #E48F2D" label="還不是會員" to="/register" />
        <div class="row justify-end q-pa-md">
          <q-btn label="重新編輯" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="確認" type="submit" color="primary" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useUserStore } from 'src/stores/user.js'
// import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const user = useUserStore()
const { isLogin } = storeToRefs(user)

const form = reactive({
  account: '',
  password: ''
})

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const router = useRouter()

const login = async () => {
  await user.login(form)
  if (isLogin) {
    router.push('/')
  }
}

</script>

<style lang="sass" scoped>

</style>
