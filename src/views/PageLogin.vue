<template>
  <div class="login">
    <HeaderPublic/>

    <form action="" class="login__form">
      <h1 class="form__title">Login</h1>
      <input-component
        :input-name="inputEmail"
      />
      <input-component
        :input-name="inputPassword"
      />
      <button-component :btn-name="btnName"/>
    </form>

  </div>
</template>

<script>
import HeaderPublic from '@/components/HeaderPublic'
import InputComponent from '@/components/Input'
import ButtonComponent from '@/components/Button'
export default {
  data () {
    return {
      inputEmail: 'Email',
      inputPassword: 'Password',
      btnName: 'Entrar'
    }
  },
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