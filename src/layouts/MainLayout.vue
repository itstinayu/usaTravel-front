<template>
  <q-layout class="bg-white" >
    <q-header elevated class="text-white" style="background: $primary" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn round dense flat :ripple="false" size="19px" color="white" class="q-mr-sm" no-caps to="/" >
          <q-img src="../assets/statue-of-liberty.png" width="48px" class="logo"/>
        </q-btn>
          <h4>美好自遊</h4>
        <template #no-option>
          <q-item>
            <q-item-section>
              <div class="text-center">
                <q-spinner-pie
                  color="grey-5"
                  size="24px"
                />
              </div>
            </q-item-section>
          </q-item>
        </template>

        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <router-link :to="'/tickets/'">
            景點票券
          </router-link>
          <router-link :to="'/map/'">
            地圖快搜
          </router-link>
          <router-link :to="'/guides/'">
            常見QA
          </router-link>
          <!-- <a href="#photoShare" class="text-white photoShare" >
            分享牆
          </a> -->
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" outline flat>
            <div class="row items-center no-wrap">
              <q-icon v-if="isLogin" name="fa-solid fa-cart-shopping" size="20px"/>
                <q-badge v-if="isLogin" :label="cart" color="red" floating transparent ></q-badge>
              <q-icon v-if="isLogin" name="arrow_drop_down" size="16px" />
              <q-menu auto-close>
                <q-list dense style="min-width: 100px" >
                  <q-item clickable class="GL__menu-link" to="/cart">
                    <q-item-section>我的購物車</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
          </q-btn>

          <q-btn dense flat no-wrap>
            <q-avatar rounded size="36px">
              <img :src="avatar" >
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>目前登入： <strong>{{ user.account }}</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item v-if="!isLogin" clickable class="GL__menu-link" label="Prompt" color="primary" to="/login" @click="prompt = true">
                  <q-item-section>
                    會員登入
                  </q-item-section>
                </q-item>
                <q-item v-if="isLogin && isAdmin" clickable v-ripple class="GL__menu-link" to="/admin">
                  <q-item-section avatar>
                    <q-icon color="primary" name="fa-solid fa-gear" />
                  </q-item-section>
                  <q-item-section>後台管理</q-item-section>
                </q-item>
                <q-item v-if="isLogin && !isAdmin" clickable v-ripple class="GL__menu-link" to="/user">
                  <q-item-section avatar>
                    <q-icon color="primary" name="assignment_ind" />
                  </q-item-section>
                  <q-item-section>我的檔案</q-item-section>
                </q-item>
                <q-separator />
                <q-item v-if="isLogin" clickable v-ripple class="GL__menu-link" @click="logout">
                  <q-item-section avatar>
                    <q-icon color="primary" name="fa-solid fa-arrow-right-from-bracket" />
                  </q-item-section>
                  <q-item-section>登出</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <!-- <div class="scroll"> -->
      <q-page-container style="padding-top: 0;">
        <router-view />
      </q-page-container>
    <!-- </div> -->
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user.js'
import { useQuasar } from 'quasar'

const user = useUserStore()

const { isLogin, isAdmin, cart, avatar } = storeToRefs(user)
const { logout } = user

const $q = useQuasar()

const prompt = ref(false)

</script>

<style lang="sass">

.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden

    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
        .q-icon
          font-size:20px
      .default-type
        visibility: visible

  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7

  &__menu-link:hover
    background: #0366d6
    color: white

  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important

  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9

  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none

.q-header
  position: sticky
  top: 0
  z-index: 1000
</style>
