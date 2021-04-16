<template>
  <div class="header">
    <header class="header">
        <nav class="header__nav">
          <p>Projeto</p> <!--Adicionar router-link posteriormente-->
          <p>Projeto</p>
          <p>Projeto</p>
        </nav>

        <div class="header__search">
          <input type="text">
          <button>Entrar</button>
        </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
}

.header__nav {
  display: flex;
}
</style>