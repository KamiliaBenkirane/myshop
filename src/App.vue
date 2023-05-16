<template>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
  height : 100%;
  margin: 0;

}

nav {
  display : flex;
  align-items: center;
  gap : 20px;
  justify-content: center;
  padding: 20px;
  width : 100%;
  background-color: #131313;
  position : fixed;
  z-index: 2;
  top: 0;
}

nav a {
  padding : 0 10px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ab8eff;
}
</style>
