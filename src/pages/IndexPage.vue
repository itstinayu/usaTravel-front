<template>
  <div id="IndexPage"/>
  <q-page  class="flex-center">
    <div class="q-md">
      <!-- carousel ----------------------------------->
      <q-carousel
        v-model="slide"
        animated
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="../assets/usa-img/antelope-canyon-1128815_1280.jpg" class="column no-wrap flex-center">
          <q-icon name="explore" size="56px" style="color: aliceblue;" />
          <h4 class="q-mt-md text-center text-h4 carousel_title">
            最佳美國自由行攻略平台
          </h4>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../assets/usa-img/griffith-observatory-1642514_1280.jpg" class="column no-wrap flex-center">
          <q-icon name="travel_explore" size="56px" style="color: aliceblue;" />
          <h4 class="q-mt-md text-center text-h4 carousel_title carousel_shadow">
            發掘玩樂靈感
          </h4>
          <h6 class="q-mt-md text-center text-h6 carousel_title carousel_shadow2">
            提供吃喝玩樂、租車、住宿等體驗，帶你發現更好玩的世界
          </h6>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="../assets/usa-img/walt-disney-center-1629173_1280.jpg" class="column no-wrap flex-center">
          <q-icon name="attractions" size="56px" style="color: aliceblue;" />
          <h4 class="q-mt-md text-center text-h4 carousel_title carousel_shadow">
            探索你的玩樂世界
          </h4>
          <h6 class="q-mt-md text-center text-h6 carousel_title">
            找尋美國體驗或探險，隨時隨地探索屬於你的玩樂
          </h6>
        </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="../assets/usa-img/golden-gate-bridge-4271360_1280.jpg" class="column no-wrap flex-center">
          <q-icon name="thumb_up" size="56px" style="color: aliceblue;" />
          <h4 class="q-mt-md text-center text-h4 carousel_title">
            玩樂品質保證
          </h4>
          <h6 class="q-mt-md text-center text-h6 carousel_title">
            活動評價公開，專業客服團隊協助，安心出遊不踩雷
          </h6>
        </q-carousel-slide>
        <q-carousel-control
          position="center"
          class="carouselInput"
        />
      </q-carousel>
      <div style="height: 150px;"></div>
      <!-- tickets ----------------------------------->
      <div class="q-pa-lg text-center">
        <div class="row">
          <div class="col-12 overlay-right q-pa-lg">
            <h4 id="hot-title">
              熱門行程
            </h4>
          </div>
          <div class="col-1 relative-position">
            <div id="swiper-prev" class="swiper-button-prev" />
          </div>
          <div class="col-10 relative-position">
            <swiper v-bind="swiperOptions" @swiper="getSwiperRef">
              <swiper-slide v-for="product in products" :key="product._id" class="col-3 q-pa-md">
                <IndexTickets id="indexTickets" v-bind="product" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="col-1 relative-position">
            <div id="swiper-next" class="swiper-button-next" />
          </div>
        </div>
      </div>
      <div style="height: 150px;"></div>
      <!-- photoShare ----------------------------------->
      <div id="photoShare" class="q-px-md">
        <div class="grid">
          <section class="content item1" >
            <h1>解鎖美國更多城市</h1>
            <p>加入會員享極速預訂、免排隊入場、免費取消等服務，輕鬆玩，無負擔</p>
          </section>
          <section class="card item2"
            style="background-image: url('https://cdn.pixabay.com/photo/2017/03/03/16/28/statue-of-liberty-2114376__340.jpg'); background-repeat: no-repeat; background-size: 350px;background-position: center;
            ">
            <h2>紐約-自由女神</h2>
          </section>
          <section class="card item3"
            style="background-image: url('https://cdn.pixabay.com/photo/2016/11/23/18/26/architecture-1854220__340.jpg'); background-repeat: no-repeat; background-size: 739px;background-position: center;
            ">
          </section>
          <section class="card item4"
            style="background-image: url('https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473__340.jpg'); background-repeat: no-repeat; background-position: center;
            ">
          </section>
          <section class="card item5"
            style="background-image: url('https://images.unsplash.com/photo-1483406354872-3e1be6d48c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGxhcyUyMHZlZ2FzJTIwc2t5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60'); background-repeat: no-repeat; background-size: 350px ;background-position: center;
            ">
            <h2>拉斯維加斯賭城</h2>
          </section>
          <section class="card item7"
            style="background-image: url('https://images.unsplash.com/photo-1561338816-dcaaaacc7cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1pYW1pYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'); background-repeat: no-repeat; background-size: 300px; background-position: center;
            ">
          </section>
          <section class="card item8"
          style="background-image: url('https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzbmV5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60'); background-repeat: no-repeat; background-position: 0 -100px;
            ">
              <h2>加州-迪士尼</h2>
          </section>
          <section class="card item9"
            style="background-image: url('https://images.unsplash.com/photo-1636313857176-c89777bacacd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291dGglMjBsYXMlMjB2ZWdhcyUyMGJvdWxldmFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'); background-repeat: no-repeat; background-size: 250px; background-position: center;
            ">
          </section>
          <section class="card item10"
          style="background-image: url('https://cdn.pixabay.com/photo/2020/06/28/00/04/chicago-5347435_960_720.jpg'); background-repeat: no-repeat; background-size: 300px;background-position: center;
            ">
          </section>
          <section class="card item11"
            style="background-image: url('https://images.unsplash.com/photo-1645074279483-97e77b488bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY1fHx1c2F8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'); background-repeat: no-repeat; background-position: 0 -20px;
            ">
            <h2>西雅圖-太空針塔</h2>
          </section>
        </div>
      </div>
      <!-- guides ----------------------------------->
      <q-parallax>
        <template #media>
          <img src="../assets/city-1117433.png" class="parallaxBg" style="display: initial;transform: translate3d(-50%, 0px, 0px);">
          <img src="../assets/city-1117433.png" class="parallaxBg2" style="display: initial;transform: translate3d(-50%, 92px, 0px);">

        </template>

        <template #content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: (scope.percentScrolled * 60) + '%',
              left: 0,
              right: 0
            }"
          />
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: (scope.percentScrolled * 30) + '%',
              left: 0,
              right: 0
            }"
          />
          <q-btn color="white" class="text-black" label="前往攻略看更多" to="/guides" />
        </template>
      </q-parallax>

    </div>
  </q-page>
  <!-- footer ----------------------------------->
  <q-footer elevated class="bg-primary text-white q-pa-lg">
    <q-toolbar>
      <q-toolbar-title class="row flex wrap">
        <div class="col-md-3 col-xs-12">
          <q-btn round dense flat :ripple="false" size="19px" color="white" class="q-mr-sm" no-caps to="/">
            <q-img src="../assets/statue-of-liberty.png" width="48px" class="logo" />
          </q-btn>
        </div>
        <div class="footer-col col-md-3 col-xs-12">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col col-md-3 col-xs-12">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col col-md-3 col-xs-12">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f" /></a>
            <a href="#"><i class="fab fa-twitter" /></a>
            <a href="#"><i class="fab fa-instagram" /></a>
            <a href="#"><i class="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>

</template>

<script setup>
import { api } from 'boot/axios.js'
// eslint-disable
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import IndexTickets from 'components/IndexTickets.vue'
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const $q = useQuasar()

const products = reactive([])
const guides = reactive([])

// swiper----------------------------------
const slide = ref(1)
const autoplay = ref(true)
const swiperRef = ref(null)
const getSwiperRef = (swiperInstance) => {
  swiperRef.value = swiperInstance
  swiperRef.value.autoplay.stop()
}

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '#swiper-prev',
    nextEl: '#swiper-next'
  },
  modules: [Navigation, Autoplay],
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  autoplay: {
    delay: 5000
  },
  loop: true
};
(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
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
})();
(async () => {
  try {
    const { data } = await api.get('/guides')
    guides.push(...data.result)
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
})()
</script>
<style lang="sass">
@import '@/css/IndexPhoto.sass'
.parallaxBg
  filter: brightness(0) saturate(100%) invert(63%) sepia(95%) saturate(990%) hue-rotate(339deg) brightness(94%) contrast(90%)
.parallaxBg2
  filter: brightness(20) saturate(100%) invert(45%) sepia(50%) saturate(990%) hue-rotate(1deg) brightness(110%) contrast(120%)
</style>
