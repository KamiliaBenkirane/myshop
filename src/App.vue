<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/basket">Basket</router-link>
    <router-link to="/login">Log in</router-link>
    <router-link to="/register">Sign up</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  height : 100%;
  margin: 0;
}

nav {
  padding: 30px;
  width : 100%;
  background-color: #131313;
}

nav a {
  padding : 0 10px;
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
