<template>
  <ul>
    <li v-for="item in asks" :key="item.id">
        <!-- <a :href="'https://news.ycombinator.com/'+item.url" target="_blank">{{ item.title }}</a> -->
        <router-link :to="`/item/${item.id}`">
          {{ item.title }}
        </router-link>
        <small>{{ item.user }}</small>
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
    this.$store.dispatch('FETCH_ASKS');
  },
  computed: {
    ...mapGetters({
      asks: 'asks',
    }),
  },
};
</script>

<style>

</style>
