<template>
  <div id="app">
    <button @click="login">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      items: [],
    }
  },
  methods: {
    async login() {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      if( res.data.id === 1 ) {
        console.log('authorization complete');
        let res2 = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.items = res2.data;
      }
    }
  }
}
</script>

<style>

</style>
