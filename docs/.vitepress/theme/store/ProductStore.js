import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const mode = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)

    return {
        mode,
        scrollTop,
        scrollHeight,
        clientHeight
    }
})
