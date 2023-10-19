// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(pinia)
  }
}

