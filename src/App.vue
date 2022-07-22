<template>
  <div id="app" vs-theme="dark">
    <JNavbar></JNavbar>
    <div style="min-height: 50vh">
      <router-view/>
    </div>
    <JFooter/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: sans-serif;
  background: #2c3e50;
  max-width: 100vw;
}

h1, h2, h3, h4, h5, h6, p, span, a {
  color: white;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import JNavbar from "@/layouts/JNavbar";
import JFooter from "@/layouts/JFooter";

export default {
  components: {JFooter, JNavbar}
}
</script>