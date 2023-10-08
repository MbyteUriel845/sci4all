<script setup>
import {ref,onMounted} from 'vue'
import router from '@/router'

const isLogged = ref(false)

onMounted(() => {
  if(localStorage.getItem('token')) {
    isLogged.value = true
  }
})


const clear = () => {
  localStorage.clear()
  isLogged.value = false
  router.push({name: 'login'})
}



</script>

<template>
  <header class="absolute z-50   w-full">
    <nav class="flex rounded-b-2xl shadow-xl text-white bg-accent w-full justify-around   h-24 p-5 ">
      <img src="../assets/img/s4alogowbackhd.png" class="ml-5 cursor-pointer" alt="logo sci4all">
      <div v-if="isLogged" class="w-full   flex justify-center gap-20 items-center ">
        <router-link class="text-lg border hover:bg-secondary font-bold  rounded-xl px-4 py-2" :to="{name: 'home'}">Home</router-link>
        <router-link class="text-lg border hover:bg-secondary  rounded-xl px-4 py-2" :to="{name: 'explore'}">Explore</router-link>
      </div>
      <div class="profile w-24 flex items-center">
        <router-link  :to="{name: 'profile'} " class="bg-secondary rounded-full w-10 h-10"></router-link>
        
      </div>
      <p @click="clear()" v-if="isLogged" >Log out</p>
      
    </nav>
    

  </header>
</template>



<style  scoped>

.router-link-active {
  background-color: #419197;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  border:none;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

</style>