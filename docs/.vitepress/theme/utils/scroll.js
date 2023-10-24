import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
	const scrollTop = ref(0)
	const scrollHeight = ref(0)
	const clientHeight = ref(0)
	const scrollY = ref(0)

	const scrollFunc = () => {
		scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop // 已经读过被卷起来的文档部分
    	scrollHeight.value = document.documentElement.scrollHeight // 文档总高度
    	clientHeight.value = document.documentElement.clientHeight // 窗口可视高度
		scrollY.value = window.scrollY
	}

	onMounted(() => {
		document.addEventListener('scroll', scrollFunc)
	})
	
	onUnmounted(() => {
		document.removeEventListener('scroll', scrollFunc)
	})

	return {
		scrollTop,
		scrollHeight,
		clientHeight,
		scrollY
	}
}