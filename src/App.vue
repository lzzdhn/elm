<script setup>

import CartBar from './components/Cart/CartBar.vue';
import Meals from './components/Meals/Meals.vue'
import MealsFilter from './components/MealsFilter/MealsFilter.vue';
import { useMealsStore } from './store/meals';
const meals=useMealsStore()

</script>

<template>
  <MealsFilter></MealsFilter>
  <Meals :desc="true" :meals="meals.filterMeals"></Meals>
  <CartBar></CartBar>
</template>

<style scoped>

</style>
 