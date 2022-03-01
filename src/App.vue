<template>
  <div id="app" class="container">
    <ToolBar />
    <router-view class="contents" />
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

    &:hover {
      color: $color-lighter;
    }

    &.router-link-exact-active {
      border-bottom: 2px solid ;
    }
  }

  .contents li > a{
    text-decoration: none;
    color: $color-dark;
    font-size: $size-lg;
    margin-right: $size-sm;
    display: inline-block;
    width: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;

    &:hover{
      color: $color-darker;
    }
  }

  small{
    margin-right: $size-sm;
  }

</style>
