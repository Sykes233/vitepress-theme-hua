<template>
    <div class="nav">
        <a href="/" class="logo">
            <i class="bi bi-code"></i>
            <span class="logo_name">Hua</span>
        </a>
        <ul class="nav_item">
            <li>
                <a href="/"><i class="bi bi-house"></i><span>首页</span></a>
            </li>
            <li>
                <a href="/about"><i class="bi bi-person"></i><span>关于</span></a>
            </li>
        </ul>
        <span class="switchDark">
            <template v-if="mode">
                <i class="bi bi-moon-fill"></i>
            </template>
            <template v-else>
                <i class="bi bi-brightness-high"></i>
            </template>
            <Switch v-model="mode" />
        </span>
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/ProductStore.js';
import { storeToRefs } from 'pinia'
import {  watch } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Switch } from '@arco-design/web-vue'
const store = useThemeStore()
const { mode } = storeToRefs(store)
watch(
    mode,
    async (newVal) => {
        if (newVal) {
            document.body.setAttribute('arco-theme', 'dark')
        } else {
            document.body.removeAttribute('arco-theme')
        }
    }
)
</script>

<style scoped>
.nav_item li {
    list-style: none;
    padding: 0 15px;
}
.logo {
    text-decoration: none;
    color: var(--color-neutral-10);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 35px;
    left: 15px;
    font-size: 20px;
    transform: translateY(-50%);
}

.switchDark {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    color: var(--color-neutral-10);
    position: absolute;
    top: 35px;
    right: 15px;
    font-size: 20px;
    transform: translateY(-50%);
}

.nav {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: var(--color-bg-2);
    position: relative;
    border-radius: 0 0 15px 15px;
    transition: 0.5s;
}

.nav:hover {
    background-color: var(--color-neutral-2);
}

.nav_item {
    display: flex;
    list-style-type: none;
    justify-content: center;
    column-gap: 2rem;
    padding: 0;
}

.nav_item li a {
    color: var(--color-neutral-10);
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    column-gap: 1px;
}
.nav_item li {
    display: flex;
    align-items: center;
}
.nav_item li i {
    font-size: 1.3rem;
}
.logo i {
    font-size: 2rem;
    transition: 0.5s;
}

.logo:hover i {
    transform: rotate(0.5turn);
}
</style>
