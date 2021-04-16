<template>
  <div class="home">
    <HeaderPublic/>
    <main class="main">
    <div class="main__text">
      <h2 class="text__subtitle">Sistema</h2>
      <h1 class="text__title">Me Contrata</h1>
      <p class="text__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore cum excepturi mollitia atque consectetur dolorum autem repudiandae tenetur nulla aliquid? Expedita magni iusto maxime quisquam debitis adipisci non consectetur sunt.</p>
      <button class="text__btn"></button>
    </div>
      <figure>
        <img src="../assets/g10.svg" alt="">
      </figure>
    </main>
  </div>
</template>

<script>
import HeaderPublic from '../components/HeaderPublic'
export default {
  name: 'Home',
  components : {
    HeaderPublic,
  }
}
</script>

<style scoped>

</style>
