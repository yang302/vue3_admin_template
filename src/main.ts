import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'virtual:svg-icons-register';
import gloablComponent from './components/index';

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn
});
app.use(gloablComponent);

app.mount('#app');
