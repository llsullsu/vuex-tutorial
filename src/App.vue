<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vuex Tutorial</h1>
    <FullName/>
    <Position/>
    <Display/>
  </div>
</template>

<script>
import FullName from './components/FullName'
import Position from './components/Position'
import Display from './components/Display'
import { store } from './store/store'

export default {
  name: 'app',
  store,
  components: {
    FullName,
    Position,
    Display
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
