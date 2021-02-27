<template>
  <div id="app">
      <router-link v-bind:to="{name: 'Home'}">Home</router-link> |
      <router-link v-bind:to="{name: 'About'}">About</router-link> |
      <router-link v-bind:to="{name: 'Experiences'}">Experiences</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 10px 0px 5px 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #054d94;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  
  color: blue;
}

#nav a.router-link-exact-active {
  color: #06643a;
}


</style>
