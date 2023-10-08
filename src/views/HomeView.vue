<template>
  <main class="flex h-full">
    <div class="w-1/5 flex flex-col absolute text-primary  z-0 justify-between bg-accent h-full">
      <div class="projects mt-28 h-3/4 ">
        <p class="text-2xl font-bold ml-2.5">Mis proyectos</p>
        <div class="flex flex-col  px-3.5  gap-4 overflow-y-auto w-full mt-6 h-full">
          <div class="card hover:shadow-xl bg-secondary/30 w-full h-24 rounded-lg px-2">
            <div class="h-full w-full flex  items-center">
              <img src="../assets/img/nasa.png" class="w-20" alt="">
              <div class="details flex flex-col gap-1.5">
                <p class="text-sm font-semibold">A Marketplace for Open Science Projects</p>
                <p class="text-sm font-semibold">Por: NASA Space Apps </p>
              </div>
            </div>
          </div>
          <div class="card hover:shadow-xl bg-secondary/30 w-full h-24 rounded-lg px-2">
            <div class="h-full w-full flex  items-center">
              <img src="../assets/img/nasa.png" class="w-20" alt="">
              <div class="details flex flex-col gap-1.5">
                <p class="text-sm font-semibold">A Marketplace for Open Science Projects</p>
                <p class="text-sm font-semibold">Por: NASA Space Apps </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-[24rem] text-primary w-full gap-12  px-6 flex  mt-24 pr-12">
      <section class="updates flex flex-col pb-8  w-3/4 mt-8 ">
        <p class="text-2xl font-bold">Updates </p>
        <div class="cards-newers items-center pb-8  w-full flex flex-col gap-4 mt-8 ">
          <div v-for="(item, i) in 5" :key="i"
            class="card-new flex-col cursor-pointer w-[80%] shadow-md hover:shadow-xl flex justify-center items-center  p-2  h-44 rounded-xl bg-accent">
            <p class="font-bold">UPDATE SERVICES</p>
            <p class="font-semibold">comments, interactions, etc...</p>
          </div>



        </div>
      </section>

    </div>
  </main>
</template>

<script setup>
</script>

<style  scoped>
.card {
  cursor: pointer;

}
</style>