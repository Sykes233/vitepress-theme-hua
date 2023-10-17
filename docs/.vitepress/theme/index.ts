// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ArcoVue)
  }
}

