<template>
  <div>
    <p>{{ item.id }}</p>
    <p>{{ item.title }}</p>
    <p>{{ item.time_ago }}</p>
    <div v-html="item.content" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      item: 'item',
    }),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  },
};
</script>

<style>

</style>
