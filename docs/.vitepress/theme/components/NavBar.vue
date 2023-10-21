<template>
    <div class="nav">
        <a href="/" class="logo">
            <CodeIcon></CodeIcon>
            <span class="logo_name">Hua</span>
        </a>
        <ul class="nav_item">
            <li>
                <a href="/"
                    ><HomeIcon></HomeIcon><span>首页</span></a
                >
            </li>
            <li>
                <a href="/about.html"
                    ><ProfileIcon></ProfileIcon><span>关于</span></a
                >
            </li>
        </ul>
        <span class="switchDark">
            <template v-if="mode">
                <MoonIcon></MoonIcon>
            </template>
            <template v-else>
                <SunIcon></SunIcon>
            </template>
            <Switch v-model="mode" />
        </span>
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/ProductStore.js'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { Switch } from '@arco-design/web-vue'
import CodeIcon from '../icons/CodeIcon.vue'
import HomeIcon from '../icons/HomeIcon.vue'
import ProfileIcon from '../icons/ProfileIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'
import SunIcon from '../icons/SunIcon.vue'
const store = useThemeStore()
const { mode } = storeToRefs(store)
watch(mode, async (newVal) => {
    if (newVal) {
        document.body.setAttribute('arco-theme', 'dark')
    } else {
        document.body.removeAttribute('arco-theme')
    }
})
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
.logo .logo-icon {
    font-size: 2rem;
    transition: 0.5s;
}

.logo:hover .logo-icon {
    transform: rotate(0.5turn);
}
</style>
