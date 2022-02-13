<template>
  <ul>
    <li v-for="item in news" :key="item.id">
      <router-link :to="`/news/${ item.id }`">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { fetchNews } from '@a/index';

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNews().then((res) => {
      this.news = res.data;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
};
</script>

<style>

</style>
