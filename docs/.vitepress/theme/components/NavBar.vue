<template>
    <div class="nav">
        <a href="/" class="logo">
            <i class="bi bi-code"></i>
            <span class="logo_name">Hua</span>
        </a>
        <ul class="nav_item">
            <li>
                <a href="/"><i class="bi bi-house"></i>首页</a>
            </li>
            <li>
                <a href="/about"><i class="bi bi-person"></i>关于</a>
            </li>
        </ul>
        <span class="switchDark">
            <template v-if="switchBtn">
                <i class="bi bi-moon-fill"></i>
            </template>
            <template v-else>
                <i class="bi bi-brightness-high"></i>
            </template>
            <a-switch v-model="switchBtn"/>
        </span>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css'
const switchBtn = ref(false)
watch(switchBtn, async (newVal)=>{
    
    if(newVal) {
        document.body.setAttribute('arco-theme', 'dark')
    } else {
        document.body.removeAttribute('arco-theme')
    }
}, { immediate: true })
</script>

<style scoped>
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

.switchDark{
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
    /* box-shadow: 0 10px 10px rgba(129, 129, 129, 0.5); */
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
../posts.data.mjs