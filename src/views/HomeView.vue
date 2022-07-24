<template>
  <div class="home">
    <div class="container">
      <JBanner/>
      <div class="row">
        <div v-for="i in 4" :key="i" class="col">
          <CategoryCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import JBanner from "@/layouts/JBanner";
import CategoryCard from "@/components/CategoryCard";

export default {
  name: 'HomeView',
  components: {
    CategoryCard,
    JBanner,
  }
}
</script>
<style>
.parallax-img img {
  width: 100%;
}

.home {
  padding: 20px 30px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("../assets/images/banner2.jpg");
  border-radius: 15px;
}

</style>
