<template>
  <div id="IndexPage" />
  <q-page class="flex-center">
    <div id="storyPage">
      <div class="bg text-center" style="padding-top: 100px; padding-bottom: -70vh;">
        <div class="run">
          <svg id="linesvg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 869 3002" xml:space="preserve">
            <!-- <path id="motionPath" class="st0" d="M155.395,383.31 C152.773,390.548 92.401,646.162 250.215,727.041 453.479,831.213 835.629,715.412 832.33,924.268 830.006,1071.385 20.339,1040.965 22.58,1206.204 24.517,1348.994 835.125,1320.378 832.275,1445.504 827.175,1669.362 57.235,1623.348 56.673,1760.63 55.674,2004.272 837.157,1936.609 837.205,2053.845 837.283,2246.807 137.92199,2252.96102 137.92199,2252.96102 " /> -->
            <path
              id="motionPath" class="st0" d="m17.204319,43.583395c0,0 4.203917,3.721553 12.014488,8.213437c16.47642,9.475641 44.436057,26.094456 66.079682,41.067182c57.119106,39.514116 89.90695,67.985362 118.142464,94.454526c19.88331,18.639444 59.994365,62.381397 80.09657,96.507867c22.229212,37.737352 32.834125,67.679295 36.043479,104.721331c5.328002,61.495268 4.495277,82.203518 -4.004837,143.735125c-5.679882,41.11615 -11.28241,76.003794 -10.012067,104.721306c1.002248,22.656831 9.780645,53.011008 22.026551,67.760875c13.798614,16.620037 59.719357,46.014024 96.115903,61.600786c45.636154,19.543617 87.197288,32.342317 126.152103,51.333972c37.237877,18.154607 79.426752,52.157934 90.108673,65.707512c25.490202,32.333239 31.809991,58.669091 48.057939,88.294403c14.156503,25.811937 50.258344,76.0219 84.101419,104.721306c41.977188,35.597237 73.411831,52.294466 102.123183,57.49406c27.676857,5.012242 44.053103,2.053363 54.065194,2.053363l6.007255,0l0,0l2.002418,0"
            />
            <g>"
              />
              <g id="motionSVG" data-name="圖層 2">
                <svg id="Layer_1" fill="#88CAD9" height="50px" width="50px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" enable-background="new 0 0 512 512" xml:space="preserve" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024" /><g id="SVGRepo_iconCarrier"> <path d="M490.7,0c-21.3,0-42.7,0-53.3,10.7l-85.3,96H21.3L0,138.7l234.7,74.7l-64,85.3h-96l-32,32l64,21.3v32 c0.7,11.5,10.7,21.3,21.3,21.3h32l21.3,64l32-32v-96l85.3-64L373.3,512l32-21.3V160l96-85.3C512,64,512,42.7,512,21.3 C512,10.7,501.3,0,490.7,0z" /> </g></svg>
              <g id="tractor" data-name="圖層 1"></g>
              </g>
            </g></svg>
        </div>
      </div>
    </div>
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
            style="background-image: url('https://cdn.pixabay.com/photo/2017/03/03/16/28/statue-of-liberty-2114376__340.jpg'); background-repeat: no-repeat; background-size: 250px;background-position: center;
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
            style="background-image: url('https://images.unsplash.com/photo-1483406354872-3e1be6d48c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGxhcyUyMHZlZ2FzJTIwc2t5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60'); background-repeat: no-repeat; background-size: 250px ;background-position: center;
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
import { ref, reactive, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import IndexTickets from 'components/IndexTickets.vue'
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

const $q = useQuasar()

const products = reactive([])
const guides = reactive([])

// gsap----------------------------------
/* eslint-disable */
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
onMounted(() => {
  gsap.set('#motionSVG', { scale: 0.7, autoAlpha: 1 })
  gsap.set('#tractor', { transformOrigin: '50% 50%' })
  let rotateTo = gsap.quickTo('#tractor', 'rotation'),
    prevDirection = 0

  gsap.to('#motionSVG', {
    scrollTrigger: {
      trigger: '#motionPath',
      start: 'top',
      end: () => '+=' + document.querySelector('#motionPath').getBoundingClientRect().height,
      scrub: 0.5,
      // markers: true,
      onUpdate: self => {
        if (prevDirection !== self.direction) { // only run this when we're changing direction
          rotateTo(self.direction === 1 ? 0 : -180)
          prevDirection = self.direction
        }
      }
    },
    ease: pathEase('#motionPath'),
    immediateRender: true,
    motionPath: {
      path: '#motionPath',
      align: '#motionPath',
      alignOrigin: [0.5, 0.5],
      autoRotate: 90
    }
  })
 /* eslint-disable */
  function pathEase (path, axis = 'y', precision = 1) {
    let rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
      useX = axis === 'x',
      start = rawPath[0][useX ? 0 : 1],
      end = rawPath[rawPath.length - 1][rawPath[rawPath.length - 1].length - (useX ? 2 : 1)],
      range = end - start,
      l = Math.round(precision * 200),
      inc = 1 / l,
      positions = [0],
      a = [],
      minIndex = 0,
      getClosest = p => {
        while (positions[minIndex] <= p && minIndex++ < l) { }
        a.push((p - positions[minIndex - 1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc)
      },
      i = 1,
      p, v
    for (; i < l; i++) {
      p = i / l
      v = MotionPathPlugin.getPositionOnPath(rawPath, p)[axis]
      positions[i] = (v - start) / range
    }
    positions[l] = 1
    for (i = 0; i < l; i++) {
      getClosest(i / l)
    }
    a.push(1)
    return p => {
      const i = p * l,
        s = a[i | 0]
      return s + (a[Math.ceil(i)] - s) * (i % 1)
    }
  }
})
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
