<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../store/index";
import useApi  from "../scripts/api";

const { index } = useApi()

const authStore = useAuthStore();

index('books').then((response) => {
  console.log(response.data)
})

onMounted(async () => {
  await authStore.getUser();
});

</script>

<template>
  <button @click="authStore.handleLogout">logout</button>
  <div v-if="authStore.user">
      <h1>{{ authStore.user.name }}</h1>
      <p>{{ authStore.user.email }}</p>
  </div>
</template>
