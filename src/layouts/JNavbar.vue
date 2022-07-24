<template>
  <div class="center examplex">
    <vs-navbar target-scroll="#hide-scroll-content" hide-scroll center-collapsed v-model="active">
      <template #left>
        <img class="logo" src="../assets/images/logo-long.png" alt="">
      </template>
      <vs-navbar-item v-for="menu in menus" :key="menu.link" :active="isActiveMenu(menu.link)" :id="menu.link" :to="menu.link">
        {{ menu.name }}
      </vs-navbar-item>
      <template #right>
        <vs-input v-model="search" border  placeholder="Search">
          <template #icon>
            <i class='bx bx-search-alt'></i>
          </template>
        </vs-input>
        <vs-button>search</vs-button>
      </template>
    </vs-navbar>
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
    menus: menus,
    active: 'home',
    search: ''
  }),
  methods: {
    isActiveMenu(menu) {
      return this.active === menu;
    }
  }
}
</script>

<style scoped>
.j-navbar {
  margin-bottom: 20px;
}

.logo {
  height: 60px;
  width: auto;
}

.vs-navbar-content {
  padding: 12px 0 !important;
}

.examplex {
  margin-bottom: 120px;
}
</style>