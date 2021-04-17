<template>
  <div class="header-component">
    <header class="header">
        <nav class="header__nav">
          <p>Projeto</p> <!--Adicionar router-link posteriormente-->
          <p>Projeto</p>
          <p>Projeto</p>
        </nav>
        
        <search/>
    </header>
  </div>
</template>

<script>
import Search from './Search'
export default {
  components: {
    Search
  }
}
</script>

<style scoped>
.header {
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header__nav {
  display: flex;
}
</style>