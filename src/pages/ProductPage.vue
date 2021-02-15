<template>
  <div class="product">
    <img
      class="product__img"
      src="https://content2.onliner.by/catalog/device/main/40b4ea5dfad47cfbf39a72e5afbef237.jpeg"
    />
    <div class="product__content">
      <h3 class="title">Игровой ноутбук ASUS TUF Gaming F15 FX506LI-HN012</h3>
      <p class="describe">
        15.6" 1920 x 1080 IPS, несенсорный, Intel Core i5 10300H 2500 МГц, 8 ГБ,
        SSD 512 ГБ, граф. адаптер: NVIDIA GeForce GTX 1650 Ti 4 ГБ, без ОС, цвет
        крышки черный
      </p>
      <div class="money">
        <span class="money-title">Цена: </span>
        <strong class="prize">2000 рублей</strong>
      </div>
      <Button />
    </div>
  </div>
  <div class="comment">
    <h3 class="comment__title">Комментарии:</h3>
    <AddComment />
  </div>
</template>

<script>
import Button from "../components/Button";
import AddComment from "../components/AddComment";

export default {
  name: "ProductPage",
  components: {
    Button,
    AddComment
  }
};
</script>

<style scoped>
.product {
  display: flex;
}
.product__img {
  max-width: 430px;
  height: 360px;
  padding: 30px 25px;
}
.product__content {
  padding: 30px 20px;
}
.title {
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 15px;
}
.describe {
  font-size: 22px;
  padding-bottom: 15px;
}
.money {
  padding-bottom: 15px;
}
.money-title {
  font-size: 23px;
  color: #4f4f4f;
}
.prize {
  font-size: 25px;
  font-weight: 900;
}
@media (max-width: 840px) {
  .product {
    display: block;
    text-align: center;
  }
}
@media (max-width: 495px) {
  .product__img {
    max-width: 360px;
    height: 290px;
    padding: 30px 25px;
  }
}
@media (max-width: 415px) {
  .product__img {
    max-width: 300px;
    height: 230px;
    padding: 20px 15px;
  }
}
.comment {
  padding: 20px 20px;
}
.comment__title {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
}
</style>
