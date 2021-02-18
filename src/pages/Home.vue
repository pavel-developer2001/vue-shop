<template>
  <div class="home">
    <Filters />
    <div class="list">
      <div v-for="product in products" :key="product.id">
        <ProductCard
          :img="product.img"
          :title="product.title"
          :price="product.price"
          :id="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
export default {
  name: "Home",
  components: {
    Filters,
    ProductCard
  },
  data() {
    return {
      products: this.$store.state.products
    };
  }
};
</script>

<style scoped>
.home {
  display: flex;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 758px) {
  .home {
    display: block;
  }
}
</style>
