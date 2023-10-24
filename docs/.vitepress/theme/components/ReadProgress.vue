<template>
    <div class="read-progress">
        <div ref="progress" class="progress-bar"></div>
    </div>
</template>

<style scoped>
.read-progress {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 3px;
    background-color: var(--color-bg-2);
}

.progress-bar {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    background-color: rgb(var(--arcoblue-6));
}
</style>

<script setup>
import { watch,ref } from 'vue'
import { useScroll } from '../utils/scroll.js'
const progress = ref(0)
const { scrollTop, scrollHeight, clientHeight } = useScroll()

watch([scrollTop, scrollHeight, clientHeight], (newVal)=>{
	progress.value.style.width = +(newVal[0]/(newVal[1]-newVal[2])).toFixed(2)*100 + '%'
})

</script>
