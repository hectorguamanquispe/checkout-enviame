<template>
  <!-- <q-card class="q-pa-md full-height">
    <q-card-section> -->
    <div>
      <q-form @submit.prevent="submitForm">
        <q-input
          v-model="formData.name"
          label="Nombre"
          outlined
          clearable
          class="q-mb-md"
        />
        <q-input
          v-model="formData.email"
          type="email"
          label="Correo Electrónico"
          outlined
          clearable
          class="q-mb-md"
        />
        <q-input
          v-model="formData.phone"
          type="tel"
          label="Teléfono"
          outlined
          clearable
          class="q-mb-md"
        />
        <q-btn
          label="Enviar"
          color="primary"
          type="submit"
          class="full-width"
        />
      </q-form>
    </div>
    <!-- </q-card-section> -->
  <!-- </q-card> -->
</template>
<script setup>
import { reactive } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    phone: ''
})

const submitForm = () => {
    console.log('click')
}
</script>
