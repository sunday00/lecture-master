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
import { /* mapState, */ mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
  computed: {
    // ...mapState({
    //   asks: (state) => state.asks,
    // }),
    ...mapGetters({
      asks: 'asks',
    }),
  },
};
</script>

<style>

</style>
