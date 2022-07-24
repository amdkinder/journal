<template>
  <div class="home container">
    <JBanner/>
  </div>
</template>

<script>
// @ is an alias to /src

import JBanner from "@/layouts/JBanner";
export default {
  name: 'HomeView',
  components: {
    JBanner
  }
}
</script>
