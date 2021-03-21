<template>
  <div id="app">
    <div class="navbar">
    <nav>
      <router-link v-bind:to="{name: 'Home'}">Home</router-link> |
      <router-link v-bind:to="{name: 'About'}">About</router-link> |
      <router-link v-bind:to="{name: 'newExperience'}">Experiences</router-link>
     
    <router-view/>
 
  </nav>
  </div>
   </div>

</template>
<script>
  
</script>

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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color: #be5f28;
}


</style>
