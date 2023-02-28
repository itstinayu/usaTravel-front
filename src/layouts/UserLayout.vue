<template>
  <q-layout view="hHh Lpr lff" container style="height: 1080px" class="overflow-hidden shadow-2 rounded-borders">
    <q-header elevated class="primary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-btn round dense flat :ripple="false" size="19px" color="white" class="q-mr-sm" no-caps to="/" >
          <q-img src="../assets/statue-of-liberty.png" width="48px" class="logo"/>
        </q-btn>
        <q-toolbar-title>{{ user.account }}的檔案</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>

          <q-item v-ripple clickable to="/user/cart">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-cart-shopping"/>
            </q-item-section>
            <q-item-section>
              我的購物車
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/user/order">
            <q-item-section avatar>
              <q-icon name="shopping_cart_checkout" />
            </q-item-section>
            <q-item-section>
              我的訂單
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/user/archive">
            <q-item-section avatar>
              <q-icon name="bookmark" />
            </q-item-section>
            <q-item-section>
              我的收藏
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/user/calender">
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section>
              月曆記事本
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <div class="absolute-top bg-secondary" style="height: 150px">
        <div class="absolute-bottom bg-transparent q-pa-md" clickable>
          <q-btn round clickable to="/user">
            <img :src="avatar" >
          </q-btn>
          <div class="text-weight-bold" :title="account">
            <strong>{{ user.account }}</strong>
          </div>
          <div>{{ user.email }}</div>
        </div>
      </div>
    </q-drawer>

    <q-page-container style="padding-top: 0;">
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const drawer = ref(false)
const user = useUserStore()
const { account, avatar } = storeToRefs(user)
</script>

<style lang="sass">
</style>
