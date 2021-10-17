import { createApp } from 'vue'
import App           from './App.vue'
import store         from './store'
import 'devextreme/dist/css/dx.material.purple.light.compact.css'

const app = createApp(App)

app.use(store)
app.mount(`#app`)
