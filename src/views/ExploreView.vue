<template>
  <main class="flex h-full">
    <div class="w-1/5 flex flex-col absolute z-0 justify-between  bg-accent h-full pr-4">
      <div class="mt-24 w-3/4 flex flex-col items-center  ml-auto h-full ">
        <p class="mt-8 text-lg text-primary font-semibold">Search</p>
        <input class="rounded-lg mt-2 max-h-12 text-white  bg-secondary px-3 py-2.5 font-semibold focus:outline-none"
          type="text">
        <!-- <div class="w-full  mt-4 max-h-52 overflow-y-auto bg-secondary/20 rounded-lg p-3">
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
          <p class="hover:bg-accent rounded cursor-pointer text-white p-2">name</p>
        </div> -->
      </div>

    </div>
    <div class="pl-12 ml-[24rem]  w-full info-profile flex flex-col mt-24">
      <p class="mt-4 text-2xl font-bold text-primary">Recommended for you</p>
      <div class="grid grid-cols-4 pr-5 mt-4   gap-4">
        <div v-for="project in projects" :key="project.id"
          class="rounded-xl flex justify-center items-center text-white  p-2 h-36 shadow-sm hover:shadow-xl bg-accent">
          <img src="@/assets/img/nasa.png" class="w-10">
          <p class="font-bold"> {{ project.title }}</p>
          <router-link :to="{ name: 'project-details', params: { id: project.id } }"
            class="bg-secondary  ml-auto mt-5 px-4 rounded-lg ">Details</router-link>
        </div>




      </div>
      <div class="mt-8">
        <button class="bg-secondary text-white px-4 py-1.5 rounded-l-xl ">prev</button>
        <button class="bg-secondary text-white px-4 py-1.5 rounded-r-xl border-l  ">next</button>
      </div>
      <div class="categories pb-8">
        <p class="mt-4 text-2xl font-bold text-primary">Categories</p>
        <div class="grid pr-5 mt-4 grid-cols-4 text-white gap-4">
          <div v-for="(_, i) in 10" :key="i"
            class="rounded-xl h-48 bg-accent flex justify-center items-center font-bold shadow-xl">
            <p>CATEGORY</p>
          </div>

        </div>
      </div>


    </div>

  </main>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { apiResources } from '@/api/apiResources'

const projects = ref()

onMounted(async () => {
  const { data } = await apiResources.get(`/projects?pageSize=30`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  projects.value = data.content
  console.log(data)
}
)



</script>

<style  scoped></style>