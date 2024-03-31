<template>
    <!-- <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      {{ questions }} -->
    <h4 class="text-title text-h4 text-center pb-8 pt-4 text-white">
      {{ titleQuestions[0].title }}
      <br>
      {{ titleQuestions[0].subtitle }}
    </h4>
    <v-expansion-panels variant="inset" class="mb-6" theme="dark">
        <v-expansion-panel
          v-for="(item, index) in results"
          :key="item.type"
        >
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            {{ item.title }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>{{ item.subtitle }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useAppStore } from '@/store/app'
import axios from "axios";

const store = useAppStore()
const route = useRoute()

const titleQuestions = computed(() => {
  return store.arr.filter((item) => item.type == route.params.id)
})

const results = ref([])

onMounted(async () => {
  const type = route.params.id

  await axios.get(`http://localhost:3000/faqs/questions?filter=${type}`).then(resp => {
    results.value = resp.data
    console.log(results.value)
  }).catch((error) => {
    console.log(error)
  })
})

</script>

<style lang="scss">
  
.v-expansion-panel-title, .v-expansion-panel-text__wrapper {
  background: #1B1A19
}
</style>