<template>
  <div class="register">
    <header-public class="register__header"/>

    <figure class="register__fig">
      <img class="fig__celebration" src="../assets/images/undraw_Celebration_re_kc9k.svg" alt="Celebration">
    </figure>

    <form action="" class="register__form">
      <h1 class="form__title">Register</h1>
      <input-component
        input-name="Name"
      />
      <input-component
        input-name="Email"
      />
      <input-component
        input-name="Password"
      />
      <input-component
        input-name="Confirm Password"
      />
      <button-component btn-name="Registrar"/>
    </form>

    <div class="register__instructions"></div>

  </div>
</template>

<script>
import HeaderPublic from '@/components/HeaderPublic'
import InputComponent from '@/components/InputComponent'
import ButtonComponent from '@/components/ButtonComponent'
import axiosInstance from '../../services/api'
export default {
  components: {
    HeaderPublic,
    InputComponent,
    ButtonComponent
  },
  mounted () {
    axiosInstance.get('http://localhost:3000/')
      .then(response => console.log(response.data))
  }

}
</script>

<style scoped>
.register {
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  grid-template-rows: 10vw 50vw 10vw;
  width: 100%;
}

.register__header {
  grid-column: 1 / span 5;
}

.register__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}

.register__fig {
  grid-column: 1 / 2;
}

.fig__celebration {
  height: 300px;
}

.register__form {
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 2 / 2;
}

.register__instructions {
  background: #3D51FF;
  box-shadow: 1px 1px 5px #000;
  grid-column: 3 / 3;
  width: 200px;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 30vh;
}
</style>