<template>
  <div class="card">
    <img class="card__img" :src="img" />
    <h5 class="card__title" @click="$router.push(`/${id}`)">
      {{ title }}
    </h5>
    <div class="card__money">
      <span class="money-prize">Цена: </span>
      <strong class="prize">{{ price }} рублей</strong>
    </div>
    <Button />
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "ProductCard",
  props: {
    img: {
      type: String
    },
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
  components: {
    Button
  }
};
</script>

<style scoped>
.card {
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  margin: 20px 15px;
}
.card__img {
  max-width: 280px;
  height: 190px;
}
.card__title {
  font-size: 18px;
  font-weight: 700;
  max-width: 250px;
  padding-top: 7px;
  padding-bottom: 10px;
  cursor: pointer;
}
.card__money {
  padding-bottom: 10px;
}
.money-prize {
  color: #4f4f4f;
  font-size: 20px;
  font-weight: 700;
}
.prize {
  font-size: 23px;
  font-weight: 900;
}
</style>
