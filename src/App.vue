<template>
  <div id="app" vs-theme="dark">
    <JNavbar/>
    <div style="min-height: 50vh">
      <router-view/>
    </div>
    <JFooter/>
  </div>
</template>

<style>
@font-face {
  font-family: 'NoirRegular';
  src: url('assets/fonts/NoirPro-Regular.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  font-family: 'NoirRegular', serif;
}

body {
  background: #18191c !important;
  max-width: 100vw;
  padding: 0;
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
import JFooter from "@/layouts/JFooter";
import JNavbar from "@/layouts/JNavbar";

export default {
  components: {JNavbar, JFooter}
}
</script>