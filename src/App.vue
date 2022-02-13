<template>
  <div id="app" class="container">
    <ToolBar />
    <router-view/>
  </div>
</template>

<script>
import ToolBar from '@c/Toolbar.vue';

export default {
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss">
  html, body{
    padding: 0;
    margin: 0;
  }

  nav a{
    text-decoration: none;
    color: $color-white;
    font-size: $size-lg;
  }

  nav a:hover{
    color: $color-lighter;
  }

  a{
    text-decoration: none;
    color: $color-dark;
    font-size: $size-lg;
  }

  a:hover{
    color: $color-darker;
  }

  .router-link-exact-active {
    border-bottom: 2px solid ;
  }
</style>
