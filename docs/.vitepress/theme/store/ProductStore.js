import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const mode = ref(false)

    return {
        mode
    }
})
