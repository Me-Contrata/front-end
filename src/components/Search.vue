<template>
  <div class="search">
    <font-awesome-icon :icon="['fas', 'search']"/>
    <input class="search__input"
      type="text"
    >
    <router-link class="search__btn" to='/login'>
      Entrar
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search__input {
  background: transparent;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  margin: 0 20px;
  padding: 3px 5px;
  outline: none;
}

.search__btn {
  background: var(--primary-color);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  padding: 5px 10px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
}
</style>