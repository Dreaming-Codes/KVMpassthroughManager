import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {createPinia} from "pinia";

loadFonts()

createApp(App)
    .use(createPinia())
    .use(vuetify)
    .mount('#app')
