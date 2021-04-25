<template>
  <div class="genericInput">
    <input type="text"
      class="genericInput__basic"
      :placeholder="inputName"
    >
  </div>
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
  border: 0;
  border-radius: 10px;
  padding: 5px 20px;
}
</style>