import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import {loadFonts} from './plugins/webfontloader.js'
import {createPinia} from "pinia";
import router from "./plugins/router";

loadFonts()

createApp(App)
    .use(router)
    .use(createPinia())
    .use(vuetify)
    .mount('#app')
