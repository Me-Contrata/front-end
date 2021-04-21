<template>
  <div class="search">
    <input class="search__input"
      type="text"
    >
    <button class="search__btn">
      Entrar
    </button>
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
  margin-right: 30px;
  outline: none;
}

.search__btn {
  background: var(--primary-color);
  border-radius: 10px;
  border: none;
  color: var(--text-color);
  padding: 5px 10px;
  text-align: center;
}
</style>