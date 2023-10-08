<template>
  <main class="flex h-full">
    <div class=" sm:w-1/4  flex flex-col absolute z-0 justify-between  bg-accent h-full">
      <div class="w-1/2 flex flex-col items-center  h-full  mr-5 ml-auto">
        <img src="../assets/img/nasa.png" class="mt-28" alt="">
        <button class="bg-secondary/40 px-4 rounded-xl font-semibold text-white mt-3">
          Apply
        </button>
        <button disabled class="bg-secondary/10  px-4 rounded-xl font-semibold text-white mt-3">
          Send message
        </button>
        <div class="flex text-primary flex-col mt-3 w-full ">
          <p class="text-primary font-semibold">Categorías:</p>
          <div class="category mt-2 grid grid-cols-1 gap-4">
          <div v-for="category in project.categoryDTOS" class="bg-secondary/50 text-sm text-white flex justify-center px-1.5 py-0.5 rounded-2xl">
            <p>{{ category.name }}</p>
          </div>
         
          </div>
          <p class="font-semibold mt-8">Status: <span class="font-normal">{{project.status}}</span></p>
  
        </div>
      </div>
    </div>
    <div class="pl-12 ml-[30rem] mb-8 pb-12 text-primary p-12 h-full w-full  info-profile flex flex-col mt-24 pr-12">
        <h2 class="mt-4 text-3xl font-bold">{{ project.title }}</h2>
        <p class="text-2xl mt-2 font-semibold">By: {{ project.email }}</p>
        <div class="mt-12 shadow-xl p-2 bg-secondary/20 rounded-xl">
          <p class="font-bold capitalize text-lg">Description</p>
          <p class="mt-2">{{ project.description }}</p>
        </div>
        <div class="mt-8 p-2 bg-secondary/20 rounded-xl shadow-xl mb-12">
          <p class="font-bold capitalize text-lg">Required profile</p>
          <p v-for="skill in project.skillDTOS" class="mt-2">•{{ skill.name }}  </p>
        
        </div>
        <div class="flex flex-col pb-20">
          <p>Project URL</p>
          <a class="underline" href="#">{{project.url}}</a>

        </div>

    
    </div>

  </main>
</template>

<script setup>
  import {ref,onMounted} from "vue";
import { useRoute } from 'vue-router'
import {apiResources} from '@/api/apiResources'



  const id = ref(useRoute().params.id)
  const project = ref('')

  onMounted(async () => {
    const {data} = await apiResources.get(`/projects/${id.value}`,
    {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
    project.value =  data
    console.log(data)
  }
  )



</script>

<style  scoped></style>