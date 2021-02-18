<template>
  <div class="cart">
    <h3 class="cart__title">Корзина</h3>
    <div class="cart__list" v-for="item in cardItems" :key="item.id">
      <CartItem :title="item.title" :price="item.price" :id=item.id />
    </div>
    <h4 class="result">Итог: <span class="result-money">8000 рублей</span></h4>
  </div>
</template>

<script>
import CartItem from "../components/CartItem";

export default {
  name: "Cart",
  data() {
    return {
      cardItems: this.$store.state.cart
    };
  },
  components: {
    CartItem
  }
};
</script>

<style scoped>
.cart {
  padding: 25px 20px;
}
.cart__title {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
.result {
  padding-top: 15px;
  font-size: 20px;
  font-weight: 500;
}
.result-money {
  font-size: 22px;
  font-weight: 700;
}
</style>
