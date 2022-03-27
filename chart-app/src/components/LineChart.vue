<template>
  <div class="chart-container">
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script>
export default {
  props:[
    'values',
  ],
  mounted() {
    new this.$_Chart(this.$refs.lineChart, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: this.values,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                beginAtZero: true
              }
          }
      }
    });
  }
}
</script>

<style scoped>
  .chart-container {
    position: relative;
    width:80%;
    margin:0 auto;
  }
</style>
