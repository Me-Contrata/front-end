<template>
  <div class="header-component">
    <header class="header">
        <nav class="header__nav">
          <router-link class="nav__link" to="#">Como funciona?</router-link>
          <router-link class="nav__link" to="#">Quem somos</router-link>
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

.nav__link {
  color: #f2f2f2;
  text-decoration: none;
  margin-right: 10px;
}
</style>