<template>
  <button class="btn-card">Добавить в корзину</button>
</template>
<script>
export default {
  name: "Button"
};
</script>
<style>
.btn-card {
  border: none;
  border-radius: 16px;
  background-color: #2f80ed;
  color: #f2f2f2;
  font-size: 17px;
  font-weight: 700;
  padding: 10px 20px;
  cursor: pointer;
}
.btn-card:focus {
  outline: none;
}
</style>
