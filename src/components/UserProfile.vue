<template>
  <section>
    <p class="user-container">
      <i class="fa-solid fa-user"></i>
      {{ user.id }}
    </p>
    <p>{{ user.created }}</p>
    <p>{{ user.karma }}</p>
    <div v-html="user.about || ''"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>
