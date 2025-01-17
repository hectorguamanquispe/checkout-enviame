<template>
  <div>
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh; background: white"
      class="shadow-2 rounded-borders"
    >
      <q-page-container>
        <q-page>
          <TabsComponent />
        </q-page>
      </q-page-container>

      <DrawerProduct />
      
    </q-layout>
  </div>
</template>

<script setup>
import TabsComponent from "./components/TabsComponent.vue";

import { onMounted } from "vue";
import { usePostMessage } from "./composables/usePostMessage";
import { useCartStore } from "./store/cartStore";
import DrawerProduct from "./components/Produtcs/DrawerProduct.vue";

const cartStore = useCartStore();

const { postMessage } = usePostMessage(
  { type: "cart-info", targetOrigin: "*" },
  (event) => {
    console.log("Mensaje recibido en el checkout", event);
    cartStore.cart = event.data.data;
  }
);

onMounted(() => {
  postMessage();
});
</script>
