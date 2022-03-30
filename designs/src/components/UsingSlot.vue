<template>
  <div>
    <ul>
      <SlotItem v-for="item in items" :key="item"> {{ item }} </SlotItem>
    </ul>
  </div>
</template>

<script>
import SlotItem from './SlotItem.vue';

export default {
  components: {
    SlotItem,
  },
  data() {
    return {
      items: ['a', 'b', 'c']
    }
  },
}
</script>

<style>

</style>
