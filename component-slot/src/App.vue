<template>
  <Layout>
    <template #header>
      HEADER IS HERE
    </template>
    <template #default>
      <div>
        <PropStyleButton
          text="Prop press" 
          :show-icon="true" 
        />
        <PropStyleButton 
          text="Prop press"
          :show-icon="false" 
        />
        <PropStyleButton 
          text="Prop press" 
          :show-icon="true" 
        />
        <PropStyleButton 
          text="Prop press" 
          :show-icon="true"
        />
        <PropStyleButton 
          text="Prop press" 
          :show-icon="false" 
        />
        <PropStyleButton
          text="Prop press" 
          :show-icon="true" 
        />
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
      </div>
    </template>
    <template #footer>
      FOOTER IS HERE
    </template>
  </Layout>
</template>

<script>
import PropStyleButton from './components/PropStyleButton.vue';
import SlotStyleButton from './components/SlotStyleButton.vue';
import NoodleIcon from './components/NoodleIcon';

import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    PropStyleButton, SlotStyleButton, NoodleIcon,
    Layout,
  }
}
</script>

<style>
#app main > div{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  display: flex;
}
</style>
