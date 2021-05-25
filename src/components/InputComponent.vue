<template>
  <input type="text"
    class="genericInput__basic"
    :placeholder="inputName"
  >
</template>

<script>
export default {
  props: {
    inputName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.genericInput__basic {
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  margin: 10px 0px;
  outline: none;
  padding: 10px 5px;
  width: 250px;
}
</style>