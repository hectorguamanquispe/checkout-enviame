<template>
  <q-item-section avatar>
    <q-img :src="product.image" />
  </q-item-section>

  <q-item-section>
    <q-item-label>{{ product.title }}</q-item-label>
    <q-item-label caption>{{
      setCurrency(product.final_line_price / 100, cartStore.cart.currency)
    }}</q-item-label>
    <q-item-label caption>
      <q-input
        v-model.number="product.quantity"
        type="number"
        borderless
        dense
        style="max-width: 45px"
        @update:model-value="onQuantityChange(product)"
        :debounce="2000"
      />
    </q-item-label>
  </q-item-section>
  <q-item-section side>
    <q-btn
      falt
      round
      color="primary"
      size="xs"
      @click="onProductDelete(product)"
      icon="delete"
    />
  </q-item-section>
</template>
<script setup>
import { useCurrency } from "../../composables/useCurrency";
import { usePostMessage } from "../../composables/usePostMessage";
import { useCartStore } from "../../store/cartStore";

const cartStore = useCartStore();

const { product } = defineProps({ product: { type: Object, default: () => ({}) } });

const { setCurrency } = useCurrency();

const { postMessage: handleQuantity } = usePostMessage(
  { type: "cart-update", targetOrigin: "*" },
  (event) => {
    console.log("Mensaje recibido actualizado", event);
    cartStore.cart = event.data.data;
  }
);

const onQuantityChange = (product) => {
  console.log(product.id, product.quantity);
  handleQuantity({ id: product.id, quantity: product.quantity });
};

const onProductDelete = (product) => {
  handleQuantity({ id: product.id, quantity: 0 });
};
</script>
