<template>
  <div id="app">
    <app-header :title="title"></app-header>
    <app-content :items="items" @renew="renewItem"></app-content>
    <using-slot></using-slot>
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import UsingSlot from './components/UsingSlot.vue';
import CheckBox from './components/CheckBox.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
    UsingSlot,
    CheckBox,
  },
  data() {
    return {
      title: 'Common',
      items: [10, 20, 30],
      checked: false,
    }
  },
  methods: {
    renewItem() {
      this.items = [40, 50, 60]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
