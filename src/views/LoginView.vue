<script setup>
import { ref } from 'vue';

import { useLogin } from '@/composables/useLogin'
const { sendLogin,
  password,
  username,
  reg_username,
  reg_email,
  reg_name,
  reg_lastName,
  reg_password,
  sendRegister } = useLogin();

const loginVisible = ref(true);

</script>

<template>
  <main class="flex h-full pb-5 bg-primary">
    <div class="flex w-full h-auto bg-white">
      <div class="pilars  absolute w-full  img h-full bg-primary">

      </div>
      <div class=" z-20 flex-col ml-auto flex  mr-5 items-center w-2/6 bg-secondary rounded-b-3xl shadow-2xl">
        <div class="tabs  mt-32 flex">

          <div @click="loginVisible = true" :class="[loginVisible ? 'bg-primary text-secondary' : 'bg-primary/50 ']"
            class="cursor-pointer  text-secondary p-4 rounded-l-lg font-semibold">Login</div>
          <div  :class="[!loginVisible ? 'bg-primary' : 'bg-primary/50']"
            class="cursor-pointer  text-secondary p-4 rounded-r-lg font-semibold">Register</div>
        </div>
        <p class="text-white font-bold">username: nasachallenge</p>
        <p class="text-white font-bold">password: nasachallenge</p>

        <div class="w-full  h-5 flex justify-center ">

          <form @submit.prevent v-if="loginVisible" class="w-4/5  px-8">
            <div class="mt-24 px-12 py-8 rounded-xl shadow-lg bg-white/25 ">

              <form>
                <div class="mb-6">
                  <label for="username" class="block mb-2 text-sm font-medium  dark:text-white">
                    Username</label>
                  <input v-model="username" type="text" id="username"
                    class="w-full rounded-lg py-2 px-2 focus:outline-none" placeholder="username">
                </div>
                <div class="mb-6">
                  <label for="password" class="block mb-2 text-sm font-medium  dark:text-white">
                    password</label>
                  <input v-model="password" type="password" id="password"
                    class="w-full rounded-lg py-2 px-2 focus:outline-none" placeholder="password">
                </div>

                <button @click="sendLogin" type="submit"
                  class="text-secondary bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
            </div>
          </form>


          <form @submit.prevent v-if="!loginVisible" class="w-4/5 register-form  px-8">
            <div class=" px-12 py-8 rounded-xl shadow-lg mt-12 bg-white/25 ">
              <form>
                <div class="grid gap-6  mb-6 md:grid-cols-2">
                  <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                      name</label>
                    <input v-model="reg_name" type="text" id="first_name"
                      class="bg-gray-50 focus:outline-none border-gray-300   text-sm rounded-lg px-2 py-2  "
                      placeholder="John">
                  </div>


                  <div>
                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                      name</label>
                    <input v-model="reg_lastName" type="text" id="website"
                      class="bg-gray-50 focus:outline-none border-gray-300   text-sm rounded-lg px-2 py-2  "
                      placeholder="flowbite.com">
                  </div>

                </div>
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input v-model="reg_username" type="text" id="reg_email"
                    class="bg-gray-50 w-full focus:outline-none border-gray-300   text-sm rounded-lg px-2 py-2  "
                    placeholder="john.doe@company.com">
                </div>
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                    address</label>
                  <input v-model="reg_email" type="email" id="email"
                    class="bg-gray-50 w-full focus:outline-none border-gray-300   text-sm rounded-lg px-2 py-2  "
                    placeholder="john.doe@company.com">
                </div>
                <div class="mb-6">
                  <label for="confirm_password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input v-model="reg_password" type="password" id="confirm_password"
                    class="bg-gray-50 w-full focus:outline-none border-gray-300   text-sm rounded-lg px-2 py-2  "
                    placeholder="•••••••••">
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required>
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the
                    <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button @click="sendRegister" type="submit"
                  class="text-secondary bg-primary bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>

            </div>
          </form>
        </div>

      </div>
    </div>
  </main>
</template> 



<style  scoped>
.pilars {
  background-image: url('@/assets/img/quasar.jpg');
  background-repeat: no-repeat;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
}
</style>