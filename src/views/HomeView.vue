<template>
  <div>
    <div class="home container">
      <JBanner/>
      <div class="row">
        <div v-for="i in 4" :key="i" class="col">
          <CategoryCard/>
        </div>
      </div>
    </div>
    <Parallax class="parallax-img" :parallax="true" :fixed="true">
      <div class="parallax-img">
<!--        <img src="../assets/images/banner2.jpg" alt="">-->
      </div>
    </Parallax>
  </div>
</template>

<script>
// @ is an alias to /src

import JBanner from "@/layouts/JBanner";
import CategoryCard from "@/components/CategoryCard";
import Parallax from "vue-parallaxy";

export default {
  name: 'HomeView',
  components: {
    CategoryCard,
    JBanner,
    Parallax
  }
}
</script>
<style>
.parallax-img img {
  width: 100%;
}
.parallax-img {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("../assets/images/banner2.jpg");
}

</style>
