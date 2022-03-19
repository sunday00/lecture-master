<template>
  <list-item name="jobs" />
</template>

<script>
import ListItem from '@c/ListItem.vue';
import bus from '@u/bus.ts';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_JOBS')
      .then(() => {
        bus.$emit('end:spinner');
      });
  },
};
</script>

<style scoped lang="scss">

</style>
