import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import routers from './router/router'
import permission from './utils/permission'
import 'element-plus/dist/index.css'
createApp(App)
  .use(ElementUI)
  .use(routers)
  .use(permission)
  .mount('#app')

