<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh; background: white" class="shadow-2 rounded-borders">
      <q-drawer side="right" v-model="drawerRight" show-if-above bordered :width="200" :breakpoint="500">
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-list>
              <q-item v-for="product in items" :key="product.id">
                <q-item-section avatar>
                  <q-img :src="product.image" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ product.title }}</q-item-label>
                  <q-item-label caption>Precio: ${{ product.price }}</q-item-label>
                  <q-item-label caption>Cantidad: {{ product.quantity }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
          <TabsComponent />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import TabsComponent from "./components/TabsComponent.vue";

import { onMounted, ref } from "vue";
import { usePostMessage } from "./composables/usePostMessage";

const items = ref([])

const { postMessage } = usePostMessage(
  { type: 'cart-info', targetOrigin: '*' },
  ({ data }) => {
    console.log('Mensaje recibido en el checkout', data);
    items.value = data.data.items
  }
)

onMounted(() => postMessage())
</script>
