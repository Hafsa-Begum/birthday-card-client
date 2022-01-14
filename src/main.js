import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/index'

loadFonts()

moment.locale('fr');

let app = createApp(App);

app.config.globalProperties.$moment = moment;

app
  .use(router)
  .use(vuetify)
  .mount('#app')

