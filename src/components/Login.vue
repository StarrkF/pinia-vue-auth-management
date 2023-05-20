<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store";

const authStore = useAuthStore();

const form = ref({});
</script>

<template>
  <form @submit.prevent="authStore.handleLogin(form)">
    <div class="flex flex-col max-w-xl gap-8 px-10 py-10 mx-auto mt-56 border shadow-lg justify-items-center">

      <h1 class="mb-10 text-4xl font-bold text-center uppercase">login</h1>

      <div class="flex flex-wrap items-center justify-between gap-2 text-lg">
        <span>Email</span>
        <input type="text" v-model="form.email" :class="authStore.errors.name ? 'border-red-600' : 'border-black'" class="w-9/12 px-4 py-2 border rounded-md">
        <span class="block text-sm text-red-700" v-if="authStore.errors.name">{{ authStore.errors.name[0] }}</span>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-2 text-lg">
        <span>Password</span>
        <input type="password" v-model="form.password" :class="authStore.errors.name ? 'border-red-600' : 'border-black'" class="w-9/12 px-4 py-2 border rounded-md">
        <span class="block text-sm text-red-700" v-if="authStore.errors.password">{{ authStore.errors.password[0] }}</span>
      </div>

      <div class="flex justify-between gap-4">

        <RouterLink to="register" class="w-full">
          <button
            class="w-full py-3 duration-300 rounded-md bg-emerald-400 hover:bg-emerald-300 hover:text-slate-900 hover:scale-105">Register</button>
        </RouterLink>

        <button type="submit"
          class="w-full py-3 duration-300 bg-indigo-600 rounded-md text-slate-100 hover:bg-indigo-400 hover:scale-105">Login</button>
      </div>

    </div>
  </form>
</template>
