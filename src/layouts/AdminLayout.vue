<template>
  <q-layout view="hHh Lpr lff" container style="height: 1080px" class="overflow-hidden shadow-2 rounded-borders">
    <q-header elevated class="primary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-btn round flat :ripple="false" size="19px" color="white" class="q-mr-sm" no-caps to="/" >
          <q-img src="../assets/statue-of-liberty.png" width="48px" class="logo"/>
        </q-btn>
        <q-toolbar-title>美好自遊-後台管理系統</q-toolbar-title>
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

          <q-item v-ripple clickable to="/admin/user">
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>
            <q-item-section>
              會員資料
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/orders">
            <q-item-section avatar>
              <q-icon name="shopping_cart_checkout" />
            </q-item-section>
            <q-item-section>
              訂單管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/tickets">
            <q-item-section avatar>
              <q-icon name="confirmation_number" />
            </q-item-section>
            <q-item-section>
              票券管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/guide">
            <q-item-section avatar>
              <q-icon name="menu_book" />
            </q-item-section>
            <q-item-section>
              文章管理
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <div class="absolute-top bg-secondary" style="height: 150px">
        <div class="absolute-bottom bg-transparent q-pa-md">
          <q-avatar size="56px" class="q-mb-sm" >
            <img :src="avatar" >
          </q-avatar>
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
.q-toolbar__title
  padding: 0
.q-layout-container > div > div
  min-height: 0

</style>
