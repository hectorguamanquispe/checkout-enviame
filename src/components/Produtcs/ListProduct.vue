<template>
  <q-list>
    <q-item v-for="product in cartStore.cart.items" :key="product.id">
      <ItemProduct :product="product"/>
    </q-item>
  </q-list>
</template>
<script setup>
import { useCartStore } from "../../store/cartStore";
import ItemProduct from "./ItemProduct.vue";

const cartStore = useCartStore();
</script>
