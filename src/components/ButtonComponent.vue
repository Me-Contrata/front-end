<template>
  <div class="btn">
    <button class="btn__default">
      {{btnName}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
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
}
</style>