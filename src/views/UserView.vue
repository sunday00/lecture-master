<template>
  <div class="user-div">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  },
  computed: {
  },
};
</script>

<style>

</style>
