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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
  computed: {
    ...mapGetters({
      news: 'news',
    }),
  },
};
</script>

<style>

</style>
