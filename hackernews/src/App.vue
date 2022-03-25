<template>
  <div id="app" class="container">
    <ToolBar />
    <transition name="fade">
      <router-view class="contents" />
    </transition>
    <Spinner :loading="loading" />
  </div>
</template>

<script>
import ToolBar from '@c/Toolbar.vue';
import Spinner from '@c/Spinner.vue';
import bus from '@u/bus.ts';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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

  .contents {
    margin-block-start: 0;
    padding-inline-start: 0;
  }

  .contents li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: $size-sm;
    margin-bottom: $size-sm;

    .points {
      padding: 4px;
      background-color: $color-gray-700;
      min-width: 25px;
      min-height: 25px;
      text-align: center;
      align-items: center;
      color: $color-lighter;
    }
  }

  .contents li > a,
  .fade-enter-active li > a,
  .fade-leave-active li > a {
    text-decoration: none;
    color: $color-dark;
    font-size: $size-lg;
    margin-right: $size-sm;
    display: inline-block;
    width: 62%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;

    &:hover{
      color: $color-darker;
    }
  }

  .user-div {
    section p {
      margin-block-start: 0;
    }
  }

  small{
    margin-right: $size-sm;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    position: absolute;
    width: calc(80%);
    max-width: 960px;
    display: block;
    margin: 0 auto;
  }

  .fade-enter, .fade-leave-to  {
    /* .fade-leave-active below version 2.1.8 */
    opacity: 0;
  }

</style>
