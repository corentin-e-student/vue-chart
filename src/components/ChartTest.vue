<template>
  <div>
    <canvas id="chart-test" height="90"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartTestData from '../components/chart-test-data'

export default {
  name: 'ChartTest',
  data() {
    return {
      chartTestData: chartTestData
    }
  },
  mounted() {
    const ctx = document.getElementById('chart-test');
    new Chart(ctx, this.chartTestData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
