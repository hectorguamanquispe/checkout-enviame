import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "quasar/src/css/flex-addon.sass";

const pinia = createPinia();

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
myApp.use(pinia);
myApp.mount("#app");
