<template>
  <div class="login">
    <header-public/>

    <form action="" class="login__form">
      <h1 class="form__title">Login</h1>
      <input-component
        input-name="Email"
      />
      <input-component
        input-name="Password"
      />
      <button-component btn-name="Entrar"/>
    </form>

  </div>
</template>

<script>
import HeaderPublic from '@/components/HeaderPublic'
import InputComponent from '@/components/InputComponent'
import ButtonComponent from '@/components/ButtonComponent'
export default {
  components: {
    HeaderPublic,
    InputComponent,
    ButtonComponent
  }
}
</script>

<style scoped>
.login {
  width: 100%;
}

.login__form {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  margin-top: 10rem;
}

.form__title {
  text-align: center;
}

.login__figure {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -9;
  margin: 0;
}
</style>