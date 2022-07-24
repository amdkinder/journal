<template>
  <vs-card type="1">
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="../assets/images/banner1.jpg" alt="">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolores libero molestiae officiis reiciendis similique voluptas? Alias deserunt earum est hic mollitia nulla quasi similique.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: "CategoryCard"
}
</script>

<style scoped>

</style>