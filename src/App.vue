<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/PageNavBar.vue'
import Footer from './components/PageFooter.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView/>
  </main>
  <el-backtop :right="80" :bottom="80" />
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
Footer {
  bottom: 0;
}
</style>
