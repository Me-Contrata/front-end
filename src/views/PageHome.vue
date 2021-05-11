<template>
  <div class="home">
    <HeaderPublic/>
    <main class="main">
    <div class="main__text">
      <h1 class="text__title">Me Contrata</h1>
      <p class="text__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore cum excepturi mollitia atque consectetur dolorum autem repudiandae tenetur nulla aliquid? Expedita magni iusto maxime quisquam debitis adipisci non consectetur sunt.</p>
      <button class="text__btn">Registre-se</button>
    </div>
      <figure class="main__figure">
        <img class="figure__img" src="../assets/images/g10.svg" alt="">
      </figure>
    </main>

    <div class="home__figure">
      <img src="../assets/images/wave.svg" alt="Wave">
    </div>
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
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}

.text__description {
  font-size: clamp(.80rem, 2.5vw, 1.2rem);
  max-width: 500px;
}

.text__btn {
  background: var(--primary-color);
  border-radius: 10px;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 5px 10px;
  text-align: center;
}

.main__figure {
  max-width: 500px;
}

.figure__img {
  width: 100%;
}

.home__figure {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -9;
  margin: 0;
}
</style>
