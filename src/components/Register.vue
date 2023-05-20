<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store";

const authStore = useAuthStore();

const form = ref({});
</script>

<template>
   <form @submit.prevent="authStore.handleRegister(form)">
    <div class="flex flex-col max-w-xl gap-8 px-10 py-10 mx-auto mt-56 border shadow-lg justify-items-center">
      <h1 class="mb-10 text-4xl font-bold text-center uppercase">Register</h1>

      <div class="flex flex-wrap items-center justify-between gap-2 text-lg">
        <span>Full Name</span>
        <input type="text" v-model="form.name" :class="authStore.errors.name ? 'border-red-600' : 'border-black'" class="w-8/12 px-4 py-2 border rounded-md">
        <span class="block text-sm text-red-700" v-if="authStore.errors.name">{{ authStore.errors.name[0] }}</span>
      </div>


      <div class="flex flex-wrap items-center justify-between gap-2 text-lg">
        <span>Email</span>
        <input type="text" :class="authStore.errors.email ? 'border-red-600' : 'border-black'" v-model="form.email" class="w-8/12 px-4 py-2 border rounded-md">
        <span class="block text-sm text-red-700" v-if="authStore.errors.email">{{ authStore.errors.email[0] }}</span>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-2 text-lg">
        <span>Password</span>
        <input type="password" v-model="form.password" :class="authStore.errors.password ? 'border-red-600' : 'border-black'" class="w-8/12 px-4 py-2 border rounded-md">
        <span class="block text-sm text-red-700" v-if="authStore.errors.password">{{ authStore.errors.password[0] }}</span>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-2 text-lg">
        <span>Confirm Password</span>
        <input type="password" v-model="form.password_confirmation" :class="authStore.errors.password_confirmation ? 'border-red-600' : 'border-black'" class="w-8/12 px-4 py-2 border rounded-md">
        <span class="block text-sm text-red-700" v-if="authStore.errors.password">{{ authStore.errors.password[0] }}</span>
      </div>

      <div class="flex justify-between gap-4">

        <RouterLink to="login" class="w-full">
          <button
            class="w-full py-3 duration-300 rounded-md bg-rose-700 text-slate-100 hover:bg-rose-500 hover:scale-105">Back</button>
        </RouterLink>

        <button type="submit"
          class="w-full py-3 duration-300 rounded-md bg-emerald-400 hover:bg-emerald-300 hover:text-slate-900 hover:scale-105">Sign In</button>
      </div>

    </div>
  </form>
</template>
