<template>
    <h4 class="text-title text-h4 text-center pb-8 pt-4 text-white">Часто задаваемые вопросы</h4>

    <v-row justify="space-evenly">
      <v-col 
      sm="5"
      md="6"
      v-for="(item, index) in collection" :key="item.type">
        <v-card
            color="#1B1A19"
            theme="dark"
            :to=" '/'+ item.type"
            class="card-home pa-2"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div style="align-self: self-end;" class="pt-2 pb-2">
                <v-card-title class="text-h5 pa-0 pl-2">
                  <!-- Форма "РТ-РА" -->
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle class="pa-0 pl-2">{{ item.subtitle !== '' ? item.subtitle : "Считается там бла-бла-бла" }}</v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="80"
                rounded="0"
              >
                <v-img src="@/assets/download.webp"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { useAppStore } from '@/store/app'
import axios from 'axios'

const store = useAppStore()

const collection = ref([])

onMounted(async () => {
  await axios.get('http://localhost:3000/faqs/title').then(resp => {
   collection.value = resp.data
   store.arr = resp.data
   console.log(collection.value)
  }).catch((error) => {
    console.log(error)
  })
})

</script>

<style lang="scss">
  
.v-img {
  background: white;
  transition: .5s;
}

.v-card-title, .v-card-subtitle, .text-title{
  font-family: Ubuntu;
}

.card-home {
  cursor: pointer;
  &:hover {
    .v-img {
      background: #D5BAAD;
    }
  }
}
</style>