<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../store'

const authStore = useAuthStore()

const isUserLoggedIn = computed(() => {
  return !!authStore.user
})
</script>

<template>
  <nav class="bg-gray-800" v-if="isUserLoggedIn && !$route.meta?.hideNavbar">
    <div class="px-2 mx-auto sm:px-6">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg class="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div class="flex items-center flex-shrink-0">
            <img class="hidden w-auto h-8 lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Tailwind">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a href="#" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>
            </div>
          </div>
        </div>

        <!-- Profile -->
        <div class="flex items-center gap-2">

          <div class="relative ml-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <img class="w-8 h-8 rounded-full" src="https://us.123rf.com/450wm/2nix/2nix1408/2nix140800144/30818234-male-avatar-profile-picture-use-for-social-website-vector.jpg?ver=6" alt="">
              </button>
            </div>
          </div>

          <span class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            {{ authStore.user.name }}
          </span>



          <button @click="authStore.handleLogout" class="px-4 py-2 duration-300 rounded-md sm:ml-10 bg-rose-700 text-slate-100 hover:bg-rose-500 hover:scale-105">
            Logout
          </button>

        </div>

      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>
      </div>
    </div>
  </nav>
  </template>
