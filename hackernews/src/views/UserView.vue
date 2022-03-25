<template>
  <div class="user-div">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import bus from '@u/bus.ts';

export default {
  components: {
    UserProfile,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_USER', this.$route.params.id)
      .then(() => {
        bus.$emit('end:spinner');
      });
  },
  computed: {
  },
};
</script>

<style>

</style>
