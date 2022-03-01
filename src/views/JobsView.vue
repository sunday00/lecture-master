<template>
  <ul>
    <li v-for="item in jobs" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <small>{{ item.domain }}</small>
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
    this.$store.dispatch('FETCH_JOBS');
  },
  computed: {
    ...mapGetters({
      jobs: 'jobs',
    }),
  },
};
</script>

<style>

</style>
