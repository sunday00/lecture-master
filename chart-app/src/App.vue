<template>
  <div>
    <h1>Chart</h1>
    <bar-chart :values="[12, 19, 3, 5, 2, 3]" />
    <line-chart :values="[12, 19, 3, 5, 2, 3]" />
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

export default {
  components: { BarChart, LineChart },
}
</script>

<style>

</style>
