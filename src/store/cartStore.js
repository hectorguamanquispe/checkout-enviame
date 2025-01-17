import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: reactive({})
  }),
//   actions: {
//     setCart(data) {
//       console.log("act", data);
//       this.data = data;
//     },
//   },
//   getters: {
//     getCart() {
//       return this.data.value;
//     },
//   },
});
