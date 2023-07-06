<script setup>
import Meal from './Meal.vue';
const props=defineProps(['meals'])

</script>
<template>
   <!-- 所有汉堡的容器 -->
   <div class="meals">
    <!--显示商品信息  -->
    <Meal :desc="$attrs.desc" v-for="item in props.meals" :meal="item"></Meal>
    <!-- 没有商品的时候返回一段文字 -->
    <h2 v-if=" !props.meals || props.meals.length == 0">没有找到该商品</h2>
   </div>
</template>
<style scoped>
.meals{
    height: calc(100vh - 150rem);
    padding-bottom:160rem;
   
    overflow: auto;
}
</style>