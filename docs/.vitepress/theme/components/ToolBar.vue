<template>
    <div class="container">
        <div class="toggle">
            <button class="toggle_button" @click="toggle">
                <template v-if="mode">
                    <i class="bi bi-moon-fill"></i>
                </template>
                <template v-else>
                    <i class="bi bi-brightness-high"></i>
                </template>
            </button>
        </div>
        <div class="to_top">
            <button class="to_top_button" @click="scrollToTop">
                <i class="bi bi-arrow-up-circle"></i>
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
}

button:hover{
	background-color: rgb(var(--arcoblue-5));
}
.toggle {
    margin-bottom: 10px;
}

i {
    color: var(--color-neutral-2);
    font-size: 20px;
}
</style>

<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useThemeStore } from '../store/ProductStore.js'
import { storeToRefs } from 'pinia'

const store = useThemeStore()
const { mode } = storeToRefs(store)

function toggle() {
    mode.value = !mode.value
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('.container').setAttribute('style', 'display:block')
    } else {
        document.querySelector('.container').setAttribute('style', 'display:none')
    }
})
</script>
