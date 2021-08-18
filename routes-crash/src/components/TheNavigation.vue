<template>
  <div id="nav">
    <router-link id="logo" to="/">home</router-link>
    <router-link to="/about">About</router-link>
    
    <router-link 
        v-for="destination in destinations" 
        :key="destination.id"
        :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
        
      </router-link>

      <router-link :to="{name: 'protected'}">dashboard</router-link>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }  
}
</script>

<style lang="scss">
  #nav a.active {
    color: tomato;
    text-shadow: 0 0 2px  gold,
      0 0 15px white ;
  }
</style>