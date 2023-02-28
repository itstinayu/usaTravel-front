<template>
  <h5 class="text-center q-pa-lg">我的記事本</h5>
  <q-separator inset />
  <q-splitter v-model="splitterModel" class="q-ma-xs">
    <template v-slot:before>
      <q-date
      v-model="selectedDate"
      :events="events"
      event-color="orange"
      />
    </template>

    <template v-slot:after >
      <div class="q-pa-lg" >
        <q-input borderless v-model="textInput" label="記下你的行程備註" placeholder="紐約機場"/>
        <q-btn label="送出" @click="addTabPanel" />
      </div>
      <q-tab-panels
        v-model="selectedDate"
        animated
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel v-for="tab in tabPanels" :name="tab.name" :key="tab.name">
          <div class="text-h4 q-mb-md">{{ tab.content }}</div>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const splitterModel = ref(30)
    const selectedDate = ref(new Date().toISOString().slice(0, 10).replace(/-/g, '/'))
    const eventDates = ref([])
    const textInput = ref('')
    const tabPanels = ref([])

    const events = computed(() => {
      const dates = [...eventDates.value]
      if (!dates.includes(selectedDate.value)) {
        dates.push(selectedDate.value)
      }
      return dates
    })
    function addTabPanel () {
      tabPanels.value.push({ name: selectedDate.value, content: textInput.value })
      eventDates.value.push(selectedDate.value)
      textInput.value = ''
    }

    return {
      splitterModel,
      selectedDate,
      events,
      textInput,
      tabPanels,
      addTabPanel
    }
  }
}
</script>

<style lang="sass">
.q-splitter__after
  height: auto
.q-splitter__before
  overflow: visible
</style>
