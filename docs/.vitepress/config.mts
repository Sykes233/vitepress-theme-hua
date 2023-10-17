import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "hua's Blog",
  description: "一个个人blog",
  srcDir: './posts',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
})
