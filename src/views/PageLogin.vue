<template>
  <div class="login">
    <HeaderPublic/>

    <h1 class="login__title">Login</h1>
    <form action="" class="login__form">
      <input-component
        :input-name="inputEmail"
      />
      <input-component
        :input-name="inputPassword"
      />
      <button class="form__btn"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import HeaderPublic from '@/components/HeaderPublic'
import InputComponent from '@/components/InputComponent'
export default {
  data () {
    return {
      inputEmail: 'Email',
      inputPassword: 'Password'
    }
  },
  components: {
    HeaderPublic,
    InputComponent
  }
}
</script>

<style scope>

</style>