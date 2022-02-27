<template>
  <ul>
    <li v-for="item in jobs" :key="item.id">
      <router-link :to="`/jobs/${ item.id }`">
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
