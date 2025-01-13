<template>
  <div>
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh; background: white"
      class="shadow-2 rounded-borders"
    >
      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
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
</script>
