<template>
  <div class="j-navbar">
    <nav>
      <router-link v-for="menu in menus" :key="menu.link" :to="menu.link">
        <a class="menu-link">{{menu.name}}</a>
      </router-link>
      <div class="animation start-home"></div>
    </nav>
  </div>
</template>

<script>
const menus = [
  {name: 'Home', link: '/home'},
  {name: 'About', link: '/about'},
  {name: 'Journal', link: '/journal'},
  {name: 'Contact', link: '/contact'},
  {name: 'Login', link: '/login'}
]
export default {
  name: "JNavbar",
  data: () => ({
    menus: menus
  })
}
</script>

<style scoped>
.j-navbar {
  margin-bottom: 20px;
}
nav {
  margin: 27px auto 0;
  padding: 10px;

  position: relative;
  width: 600px;
  height: 50px;
  background-color: #34495e;
  border-radius: 8px;
  font-size: 0;
}

nav a {
  line-height: 50px;
  height: 100%;
  font-size: 15px;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  cursor: pointer;
}

nav .animation {
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;
  transition: all .5s ease 0s;
  border-radius: 8px;
}

a {
  width: 120px;
}

nav a:hover  {
  left: 0;
  background-color: #3498db;
  transition: all .5s ease 0s;
  border-radius: 8px;

}
nav .router-link-active .menu-link {
  width: 100px;
  left: 0;
  background-color: #3498db;
  border-radius: 8px;
  transition: all .5s ease 0s;

}

body {
  font-size: 12px;
  font-family: sans-serif;
  background: #2c3e50;
}

h1 {
  text-align: center;
  margin: 40px 0 40px;
  text-align: center;
  font-size: 30px;
  color: #ecf0f1;
  text-shadow: 2px 2px 4px #000000;
  font-family: 'Cherry Swash', cursive;
}

</style>