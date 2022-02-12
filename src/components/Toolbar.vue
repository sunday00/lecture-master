<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/news">News</router-link>
      </li>
      <li>
        <router-link to="/asks">Asks</router-link>
      </li>
      <li>
        <router-link to="/jobs">Jobs</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
nav ul{
  display: flex;
  list-style: none;
  gap: $size-md;
  padding-inline-start: 0;
  background-color: $color-primary;
  padding: $size-2x;
  margin-block-start: 0;

}
</style>
