<template>
  <q-drawer
    side="right"
    v-model="drawerRight"
    show-if-above
    bordered
    :width="250"
    :breakpoint="500"
  >
    <!-- <q-scroll-area class="fit"> -->
    <div class="column justify-between" style="height: 100%">
      <div class="q-pa-sm">
        <ListProduct />
      </div>
      <div class="q-pa-md">
        <q-separator class="q-mb-sm" />
        <div class="row">
          <div class="col-7 text-weight-bold text-grey">Compra ({{ cartStore.cart.item_count }})</div>
          <div class="col-5 text-grey">{{ setCurrency(cartStore.cart.items_subtotal_price / 100, cartStore.cart.currency) }}</div>
        </div>
        <div class="row">
          <div class="col-7 text-weight-bold text-grey">Envío</div>
          <div class="col-5 text-grey">Pendiente</div>
        </div>
        <br />
        <div class="row">
          <div class="col-7 text-weight-bold">Total</div>
          <div class="col-5 text-weight-bold">
            {{ setCurrency(cartStore.cart.total_price / 100, cartStore.cart.currency) }}
          </div>
        </div>
      </div>
    </div>
    <!-- </q-scroll-area> -->
  </q-drawer>
</template>
<script setup>
import { useCurrency } from "../../composables/useCurrency";
import { useCartStore } from "../../store/cartStore";
import ListProduct from "./ListProduct.vue";

const cartStore = useCartStore();
const { setCurrency } = useCurrency();
</script>
