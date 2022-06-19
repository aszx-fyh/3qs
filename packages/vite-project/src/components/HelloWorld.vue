<script setup lang="ts">
import { ref, } from 'vue'
import { Comp1 } from "./Icon";
import { QPromise } from "../promise";
const p = new Promise((resolve,reject)=>{
  console.log('p1')
  reject(1)
}).then(res=>{
  console.log('p3')
  return res+1;
}).catch((res)=>{
  console.log('p4')
  return res+3;
})
console.log('p2',p)

</script>

<template>
  <Comp1></Comp1> 
  
</template>

<style scoped>
</style>
