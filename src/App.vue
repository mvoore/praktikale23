<head>
<link rel="stylesheet" href="src/assets/my-style.css">
</head>
<template>
  <nav class=" justify-content-center">
    <router-link to="/">Home</router-link>|
    <router-link to="/kontakt">Logi välja</router-link>
  </nav>
  <nav class="footermenu justify-content-center">
    <router-link to="/kkk">KKK</router-link>
    |
    <router-link to="/kontakt">Kontakt</router-link>
  </nav>
  <router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import InternshipsView from "@/views/InternshipsView.vue";
</script>