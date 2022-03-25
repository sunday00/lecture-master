<template>
  <div class="spinner" v-if="loading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.spinner {
  display: flex;
  gap: $size-ss;
  width: calc($size-sm * 3 + $size-ss * 2);
  height: calc($size-sm * 3 + $size-ss * 2);
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    display: inline-block;
    width: $size-sm;
    background: #42b884;
    animation: loading 1.2s cubic-bezier(0,0.5,0.5,1) infinite;

    &:nth-child(1) {
      animation-delay: -0.24s;
    }

    &:nth-child(2) {
      animation-delay: -0.12s;
    }

    &:nth-child(3) {
      animation-delay: 0;
    }
  }
}

@keyframes loading {
  0% {
    height: calc($size-sm * 3 + $size-ss * 2);
  }

  50%, 100% {
    height: $size-2x;
  }
}
</style>
