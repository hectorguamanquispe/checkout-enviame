<template>
  <div>
    <q-tabs v-model="activeTab" class="text-teal" align="justify">
      <q-tab name="form" label="Formulario" icon="edit" />
      <q-tab name="tab2" label="Pestaña 2" icon="dashboard" />
      <q-tab name="tab3" label="Pestaña 3" icon="apps" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="activeTab" animated>
      <q-tab-panel name="form">
        <FormComponent />
      </q-tab-panel>

      <q-tab-panel name="tab2">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="tab3">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script setup>
import { ref } from "vue";
import FormComponent from "./FormComponent.vue";

const activeTab = ref("form");
</script>
