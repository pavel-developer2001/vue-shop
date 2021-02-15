<template>
  <div class='home'>
    <Filters />
    <div class='list'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    
  </div>
</template>

<script>
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
export default {
  name: "Home",
  components: {
    Filters,
    ProductCard
  }
};
</script>

<style scoped>
.home{
  display: flex;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
