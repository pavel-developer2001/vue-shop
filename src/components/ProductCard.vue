<template>
    <div class='card'>
        <img class='card__img' src='https://content2.onliner.by/catalog/device/main/40b4ea5dfad47cfbf39a72e5afbef237.jpeg' />
        <h5 class='card__title'>Игровой ноутбук ASUS TUF Gaming F15 FX506LI-HN012</h5>
        <div class='card__money'>
            <span class='money-prize'>Цена: </span>
            <strong class='prize'>2000 рублей</strong>
        </div>
        <Button />
    </div>
</template>

<script>
import Button from './Button'
export default {
    name: "ProductCard",
    components: {
        Button
    }

}
</script>

<style scoped>
    .card{
        border: 1px solid black;
        border-radius: 8px;
        text-align: center;
        padding: 10px;
        margin: 20px 15px;
    }
    .card__img{
        max-width: 280px;
        height: 190px;
    }
    .card__title{
        font-size: 18px;
        font-weight: 700;   
        max-width: 250px;
        padding-top: 7px;
        padding-bottom: 10px;
        cursor: pointer;
    }
    .card__money{   
    padding-bottom: 10px;
    }
    .money-prize{
        color: #4F4F4F;
        font-size: 20px;
        font-weight: 700;
    }
    .prize{
        font-size: 23px;
        font-weight: 900;
    }
    
</style>