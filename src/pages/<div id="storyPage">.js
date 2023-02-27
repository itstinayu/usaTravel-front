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
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

// gsap----------------------------------
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
<style type="text/css">
    .st0{fill:none;stroke:rgba(255, 0, 0, 0);stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
