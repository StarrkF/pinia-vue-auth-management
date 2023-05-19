<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store";

const authStore = useAuthStore();

const form = ref({});
</script>

<template>
  <div>
    <form @submit.prevent="authStore.handleLogin(form)">
      <div class="mb-6">
        <input type="email" v-model="form.email" placeholder="Email" />
        <div v-if="authStore.errors.email">
          <span>{{ authStore.errors.email[0] }}</span>
        </div>
      </div>
      <div class="mb-6">
        <input type="password" v-model="form.password" placeholder="Password" />
        <div v-if="authStore.errors.password" class="flex">
          <span>{{ authStore.errors.password[0] }}</span>
        </div>
      </div>
      <div class="mb-10">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
