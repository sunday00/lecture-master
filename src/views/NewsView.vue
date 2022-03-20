<template>
  <list-item name="news" />
</template>

<script>
import ListItem from '@c/ListItem.vue';
import ListMixinVue from '@/components/mixins/ListMixin.vue';

export default {
  components: {
    ListItem,
  },
  mixins: [
    ListMixinVue,
  ],
};
</script>

<style scoped lang="scss">

</style>
