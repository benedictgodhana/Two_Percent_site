// main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#007bff',
        secondary: '#424242',
        accent: '#82B1FF',
      },
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
