<template>

  <v-app-bar
    color="#1B1A19"
  >
    <v-container>
      <v-row justify="space-between">

        <v-row @click="$router.push('/')" class="logo" align="center" justify="space-between" style="max-width: 13%">
          <img class="img-logo" src="@/assets/download.webp"/>
          <span class="text-logo">
            РосТех<br>Техприемка
          </span>
        </v-row>

        <v-btn class="btn-bar" update:focused="true" icon @click="active.toggleBtn()">
          <v-icon class="icon-bar">mdi-magnify</v-icon>
        </v-btn>

      </v-row>
    </v-container>
  </v-app-bar>

      <v-dialog
        v-model="active.active"
        width="auto"
      >
         <MySearch/>
      </v-dialog>


</template>

<script setup>
import { useAppStore } from '@/store/app'
import MySearch from '@/components/Search.vue'
import {ref} from 'vue'

const active = useAppStore()


</script>

<style lang="scss">
.v-row {
  margin: 0px
}

.img-logo {
  overflow: hidden;
  width: 30px;
  background: white;
  transition: 0.5s;
}

.text-logo {
  transition: 0.5s;
  line-height: 20px; font-size: 20px;
}

.logo {
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    .img-logo {
      background-color: #D5BAAD;
      color: #D5BAAD;
    }

    .text-logo {
      color: #D5BAAD;
    }
  }
}

.icon-bar {
  transition: 0.5s;
}

.btn-bar {
  transition: 0.5s;

  span {
    transition: 0.5s;
  }
  &:hover {
    i {
      color: #D5BAAD;
    }
  }
}
</style>