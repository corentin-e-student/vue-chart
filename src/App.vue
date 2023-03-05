<template>
  <div id="app">
    <ChartTest msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import ChartTest from './components/ChartTest.vue'

  export default {
    name: 'App',
    components: {
      ChartTest
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
