<template>
  <button class="btn__default">
    {{btnName}}
  </button>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.btn__default {
  background: var(--primary-color);
  border-radius: 10px;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 5px 15px;
  text-align: center;
  width: 250px;
}
</style>