<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'


const router = useRouter()

function NavTo() {
  $router.push({
    name: 'about'
  })
}

// onMounted(() => {
//   axios
//     .get("http://localhost:3000/todos")
//     .then((response) => {
//       console.log(response.data)
//     })
// });


const searchQuery = ref('');
const loading = ref(false);
const questions = ref([]);

const filteredUsers = computed(() => {
  return questions.value.filter(obj => obj.question.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const fetchUsers = async (query) => {
  loading.value = true;
  try {
    const response = await fetch(`http://localhost:3000/todos`);
    if (!response.ok) throw new Error('Network response was not ok.');
    questions.value = await response.json();
    // filteredUsers.value = questions.value;
  } catch (error) {
    console.error('Error fetching question:', error);
    // filteredUsers.value = [];
  } finally {
    loading.value = false;
  }
};

// Debounce search for better performance
let debounceTimeout = null;
const onSearch = () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    if (searchQuery.value.trim()) {
      fetchUsers(searchQuery.value.trim());
    } else {
      // filteredUsers.value = [];
    }
  }, 300);
};

watch(searchQuery, (newQuery) => {
  if (newQuery === '') {
    // filteredUsers.value = [];
  }
});

</script>
<template>
  <v-card class="mx-auto" color="grey-lighten-3" width="500">
    <v-card-text>
      <v-text-field v-model="searchQuery" :loading="loading" density="compact" variant="solo" label="Введите вопрос и найдите решение"
        append-inner-icon="mdi-magnify" single-line hide-details @input="onSearch"></v-text-field>
    </v-card-text>
    <v-list dense>
      <v-list-item @click="$router.push('/about')" v-for="result in filteredUsers" :value="result._id" :key="result._id">
        <v-list-item-title>{{ result.question }}</v-list-item-title>
        <v-list-item-subtitle>
          <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item v-if="filteredUsers.length === 0 && !loading">
       Извиние, на ваш запрос нет резульатов 
      </v-list-item>
    </v-list>
  </v-card>
</template>