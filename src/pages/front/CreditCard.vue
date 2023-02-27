<template>
  <div class="window-height window-width row justify-center items-center">
    <div class="q-pr-md col-3">
      <q-card class="my-card" style="border-radius: 12px;">
        <q-img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/21.jpeg">
          <div class="absolute-top text-subtitle2" align="left">
            <q-img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" style="width: 48px;"></q-img>
          </div>
          <div class="absolute-top text-subtitle2" align="right">
            <q-img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" style="width: 52px;"></q-img>
          </div>
          <div class="absolute-center text-h5 text-center">
            {{ card }}
          </div>
          <div class="absolute-bottom text-subtitle2" align="left">
            <q-btn flat>{{ name }}</q-btn>
          </div>
          <div class="absolute-bottom text-subtitle2" align="right">
            <q-btn flat>{{ id }}</q-btn>
          </div>
        </q-img>
      </q-card>
    </div>
    <q-card>
      <q-card-section>
        <div class="q-gutter-y-md col-6" style="min-width: 380px border-radius: 12px;">
          <q-input
            filled
            v-model="name"
            label="持卡人"
            mask=""
            unmasked-value
          />
          <q-input
            filled
            v-model="card"
            label="卡號"
            mask="#### - #### - #### - ####"
            fill-mask="#"
            unmasked-value
          />
          <div class="row">
          <q-input
            filled
            v-model="id"
            label="到期日"
            mask="##/##"
            fill-mask
            class="col-6 q-pr-xs"
          />
            <!-- <q-badge color="accent">驗證碼: "{{ confirm }}"</q-badge> -->
            <q-input
              filled
              v-model="confirm"
              label="驗證碼"
              mask="###"
              fill-mask="#"
              unmasked-value
              class="col-6"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-section align="center">
        <q-btn unelevated color="primary" label="送出" @click="onCheckoutBtnClick"/>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = useUserStore()
const { checkout } = user

const name = ref(null)
const card = ref(null)
const id = ref(null)
const confirm = ref(null)

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

</script>
<style lang="sass">
.q-img__content > div
    pointer-events: all
    position: absolute
    padding: 16px
    color: #fff
    background: rgba(0, 0, 0, 0)

</style>
