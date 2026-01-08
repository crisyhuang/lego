import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './routes';

const app = createApp(App);
app.use(Antd).use(router);
app.mount('#app');
