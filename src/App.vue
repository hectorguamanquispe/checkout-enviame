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

      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="250"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-list>
              <q-item v-for="product in items" :key="product.id">
                <q-item-section avatar>
                  <q-img :src="product.image" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ product.title }}</q-item-label>
                  <q-item-label caption
                    >${{ product.final_line_price }}</q-item-label
                  >
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
              </q-item>
            </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>
    </q-layout>
  </div>
</template>

<script setup>
import TabsComponent from "./components/TabsComponent.vue";

import { onMounted, ref } from "vue";
import { usePostMessage } from "./composables/usePostMessage";

const items = ref([]);

const { postMessage } = usePostMessage(
  { type: "cart-info", targetOrigin: "*" },
  (event) => {
    console.log("Mensaje recibido en el checkout", event);
    items.value = event?.data?.data?.items;
  }
);

const { postMessage: handleQuantity } = usePostMessage(
  { type: "cart-update", targetOrigin: "*" },
  (event) => {
    console.log("Mensaje recibido actualizado", event);
    items.value = event?.data?.data?.items;
  }
);

onMounted(() => {
  postMessage();
});

const onQuantityChange = (product) => {
  console.log(product.id, product.quantity);
  handleQuantity({ id: product.id, quantity: product.quantity });
};

const onProductDelete = (product) => {
  handleQuantity({ id: product.id, quantity: 0 });
};
</script>
