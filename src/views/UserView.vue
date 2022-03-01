<template>
  <div>
    <p>{{ user.id }}</p>
    <p>{{ user.created }}</p>
    <p>{{ user.karma }}</p>
    <p>{{ user.about || '' }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>

<style>

</style>
