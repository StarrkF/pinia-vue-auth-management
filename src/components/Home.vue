<script setup>
import { onMounted, ref } from "vue";
import useApi from "../scripts/api";

const { index } = useApi()
const books = ref({});

const getBooks = () => {
  index('books').then((response) => {
    books.value = response.data
  })
}

onMounted(async () => {
  getBooks()
});

</script>

<template>
  <div class="relative overflow-x-auto">

    <div class="p-20">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Book
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
            <th scope="col" class="px-6 py-3">
              Author
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="book in books">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ book.name }}
            </th>
            <td class="px-6 py-4">
              {{ book.type.name }}
            </td>
            <td class="px-6 py-4">
              {{ book.author }}
            </td>
            <td class="px-6 py-4">
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
