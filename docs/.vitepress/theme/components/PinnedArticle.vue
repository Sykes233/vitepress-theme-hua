<template>
    <div class="pinned">
        <TopIcon width="15" height="15"></TopIcon>
        <span>置顶文章</span>
    </div>
</template>

<script setup>
import TopIcon from '../icons/TopIcon.vue'
</script>

<style scoped>
.pinned {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
