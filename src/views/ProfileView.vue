<template>
  <main class="flex h-full">
    <div class="w-1/4 flex flex-col absolute z-0 justify-between pr-6 bg-accent h-full">
      <div></div>
      <div class="bg-base shadow-xl flex flex-col items-center h-4/6 rounded-t-[2rem]  ml-auto w-3/5 mt-28">
        <img src="../assets/img/profile.jpg" class="w-40 h-40 rounded-full -mt-28  bg-white">
        <div class="details w-full flex flex-col text-white">
          <div class="datauser w-full flex flex-col items-center justify-center mt-4">
            <p class="font-semibold uppercase text-xl">{{username}}</p>
          </div>
          <div class="field text-xs  font-medium flex flex-col gap-2 px-2 mt-3 w-full">
            <p>Frontend Developer • San Francisco, CA</p>
          </div>
          <button class="mt-5 bg-accent/50 w-1/2 self-center rounded-xl py-0.5 px-3">Editar perfil</button>
          <div class="social flex gap-3 flex-col px-3 mt-6">
            <div class="network flex gap-2 items-center ">
              <div class="h-8 w-14 rounded-2xl flex justify-center items-center  bg-white mt-">
                <img src="../assets/img/linkedin.webp" class="w-5" alt="">
              </div>
              <p>@jhonapplesed200</p>
            </div>
            <div class="network flex gap-2 items-center ">
              <div class="h-8 w-14 rounded-2xl flex justify-center items-center bg-white mt-">
                <img src="../assets/img/git.png" class="w-6  " alt="">
              </div>
              <p>John Applesed</p>
            </div>
            <div class="network flex gap-2 items-center ">
              <div class="h-8 w-14 rounded-2xl bg-white mt-"></div>
              <p>@jhonapplesed200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-12 ml-[33rem] w-full  mb-12 info-profile flex flex-col pb-4 mt-24">
      <p class="text-primary font-bold text-4xl mt-6">Profile</p>
      <section class="open-projects-user w-full">
        <h3 class="mt-3 text-2xl font-semibold text-primary/90">Projects</h3>
        <div v-for="project in projects" :key="project.id" class="card p-2 w-3/4 bg-accent h-44 mt-3 rounded-3xl">
          <div class="row flex h-full">
            <img src="../assets/img/nasa.png" class="" alt="">
            <div class="details-project w-full flex flex-col text-primary">
              <p class=" text-xl font-bold">{{project.title}}</p>
              <p class=" font-semibold">By:<span class="font-bold"> NASA Space Apps</span></p>
              <div class=" flex  gap-2 bg-secondary rounded-md mt-2">Categories:
                  <p v-for="category in project.categoryDTOS" :key="category.name"> {{ category.name }}</p>

              </div>
              <div class="flex mt-2 justify-between pr-3">
        <router-link  :to="{name: 'project-details', params: {id: project.id}} " class="bg-secondary  ml-auto mt-5 px-4 rounded-lg ">Details</router-link>

                
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>

  </main>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import {apiResources} from '@/api/apiResources'


const id = ref(localStorage.getItem('id'))
const projects = ref('')
const username = ref('')


onMounted(async() => {
  const {data} = await apiResources.get(`/users/${id.value}`,
  {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
  )
  projects.value =  data.projectDTOS
  username.value = data.username
})



</script>

<style  scoped></style>