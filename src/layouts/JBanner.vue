<template>
  <div class="j-banner">
    <h1>Science, education and agro-technology Journal</h1>
  </div>
</template>

<script>
export default {
  name: "JBanner"
}
</script>

<style lang="css" scoped>
  .j-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 20px 10%;
    position: relative;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("../assets/images/banner1.jpg");
    background-size: cover;
    border-radius: 15px;
  }
</style>