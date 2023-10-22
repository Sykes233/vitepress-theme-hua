<template>
    <div ref="containerRef" class="container">
        <div class="toggle">
            <button class="toggle_button" @click="toggle">
                <template v-if="mode">
                    <MoonIcon></MoonIcon>
                </template>
                <template v-else>
                    <SunIcon></SunIcon>
                </template>
            </button>
        </div>
        <div class="to_top">
            <button class="to_top_button" @click="scrollToTop">
                <ToolBarTopIcon width="20" height="20"></ToolBarTopIcon>
            </button>
        </div>
    </div>
</template>

<style scoped>
.container {
    z-index: 100;
    position: fixed;
    right: 10px;
    bottom: 30px;
    transition: 0.5s;
    display: none;
}
button {
    outline: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(var(--arcoblue-6));
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

button:hover {
    background-color: rgb(var(--arcoblue-5));
}
.toggle {
    margin-bottom: 10px;
}
</style>

<script setup>
import SunIcon from '../icons/SunIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useThemeStore } from '../store/ProductStore.js'
import { storeToRefs } from 'pinia'
import ToolBarTopIcon from '../icons/TopIcon.vue'

const store = useThemeStore()
const { mode } = storeToRefs(store)
const containerRef = ref()

function toggle() {
    mode.value = !mode.value
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollFunc = () => {
    if (window.scrollY > 200) {
        containerRef.value.setAttribute('style', 'display:block')
    } else {
        containerRef.value.setAttribute('style', 'display:none')
    }
}

onMounted(() => {
    document.addEventListener('scroll', scrollFunc)
})

onUnmounted(() => {
    document.removeEventListener('scroll', scrollFunc)
})
</script>
