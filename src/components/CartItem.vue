<template>
  <div class="cart-item">
    <strong class="cart-title">{{ title }}</strong>
    <div class="cart-money">
      <span class="cart-prize">Цена:</span>
      <strong class="money">{{ price }} рублей</strong>
    </div>
    <button class="delete-item">
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          @click="deleteItem(id)"
          d="M1.5 24.8889C1.5 26.6 2.85 28 4.5 28H16.5C18.15 28 19.5 26.6 19.5 24.8889V6.22222H1.5V24.8889ZM21 1.55556H15.75L14.25 0H6.75L5.25 1.55556H0V4.66667H21V1.55556Z"
          fill="#EB5757"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    title: {
      type: String
    },
    price: {
      type: Number
    },
    id: {
      type: Number
    }
  },
  methods: {
    deleteItem(itemId) {
      this.$store.state.cart.splice(itemId, 1);
    }
  }
};
</script>
<style scoped>
.cart-item {
  margin-top: 15px;
  max-width: 705px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #2f80ed;
  background-color: #e0e0e0;
  padding: 11px 13px;
}
.cart-title {
  font-weight: 500;
  min-width: 396px;
  max-width: 396px;
}
.cart-money {
  padding-left: 7%;
  padding-right: 14%;
}
.cart-prize {
  color: #4f4f4f;
  display: block;
  font-size: 20px;
}
.money {
  font-weight: bold;
  font-size: 22px;
}
.delete-item {
  cursor: pointer;
  border: none;
  background-color: #e0e0e0;
}
.delete-item:focus {
  outline: none;
}
@media (max-width: 670px) {
  .cart-money {
    padding-right: 6%;
  }
  .cart-title {
    font-weight: 500;
    min-width: 330px;
    max-width: 330px;
  }
}
@media (max-width: 535px) {
  .cart-title {
    min-width: 240px;
    max-width: 240px;
  }
}
@media (max-width: 440px) {
  .cart-item {
    display: block;
  }
  .cart-title {
    min-width: 180px;
    max-width: 180px;
  }
}
</style>
