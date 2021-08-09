<template>
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100"
    width="100px"
    height="100px"
  >
    <circle 
      cx="50" 
      cy="20" 
      r="10" 
    />
    <circle 
      cx="28.8" 
      cy="28.8" 
      r="9" 
    />
    <circle 
      cx="20" 
      cy="50" 
      r="8" 
    />
    <circle 
      cx="28.8" 
      cy="71.2" 
      r="7" 
    />
    <circle 
      cx="50" 
      cy="80" 
      r="6" 
    />
    <circle 
      cx="71.2" 
      cy="71.2" 
      r="5" 
    />
    <circle 
      cx="80" 
      cy="50" 
      r="4" 
    />
    <circle 
      cx="71.2" 
      cy="28.8" 
      r="3"
    />
  </svg>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  svg{
    animation: spin 2S linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>