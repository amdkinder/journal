<template>
<div class="footer">
  <p>
    By <span>Devcraft</span>
  </p>

</div>
</template>

<script>
export default {
  name: "JFooter"
}
</script>

<style scoped>

p {
  bottom: 20px;
  width: 100%;
  text-align: center;
  /*position: fixed;*/
  color: #ecf0f1;
  font-family: 'Cherry Swash',cursive;
  font-size: 16px;
}
.footer {
  margin-top: 50px;
  background: var(--vs-background);
}

span {
  color: #2BD6B4;
}
</style>