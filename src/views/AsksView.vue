<template>
  <ul>
     <li v-for="item in asks" :key="item.id">
      <router-link :to="`/ask/${ item.id }`">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { fetchAsks } from '@a/index';

export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    fetchAsks().then((res) => {
      this.asks = res.data;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
};
</script>

<style>

</style>
