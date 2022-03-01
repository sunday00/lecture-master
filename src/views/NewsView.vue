<template>
  <ul>
    <li v-for="item in news" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <small>
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </small>
        <small>{{ item.time_ago }}</small>
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
