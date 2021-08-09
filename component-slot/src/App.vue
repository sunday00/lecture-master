<template>
  <PropStyleButton text="Prop press" />
  <PropStyleButton 
    text="Prop press"
    :show-icon="false" 
  />
  <PropStyleButton text="Prop press" />
  <PropStyleButton 
    text="Prop press" 
    :show-icon="true"
  />
  <PropStyleButton 
    text="Prop press" 
    :show-icon="false" 
  />
  <PropStyleButton text="Prop press" />
  <SlotStyleButton>
    <NoodleIcon />
    Slot PRESS
  </SlotStyleButton>
  <SlotStyleButton>
    Slot PRESS
    <NoodleIcon />
  </SlotStyleButton>
  <SlotStyleButton>
    <NoodleIcon />
    Slot PRESS
  </SlotStyleButton>
</template>

<script>
import PropStyleButton from './components/PropStyleButton.vue';
import SlotStyleButton from './components/SlotStyleButton.vue';
import NoodleIcon from './components/NoodleIcon';

export default {
  name: 'App',
  components: {
    PropStyleButton, SlotStyleButton, NoodleIcon
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
