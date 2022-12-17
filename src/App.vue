<template>
  <div id="app">
   <vue-todo-list></vue-todo-list>
  </div>
</template>

<script>
import VueTodoList from "./components/VueTodo.vue"

export default {
  name: 'App',
  components: {
    VueTodoList
  }
}
</script>

<style>
html{
  background-color:#F5F6F7;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
