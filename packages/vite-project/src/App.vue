<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import city from './city.json'
// import logo from "./assets/logo.png?raw";
</script>

<template>
  {{city }}
  <!-- {{logo }} -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
