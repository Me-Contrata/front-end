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
  grid-column: 1 / span 2;
}

.fig__celebration {
  height: 300px;
}

.register__form {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  margin-top: 3rem;
    grid-column: 2 / span 2;
}

</style>