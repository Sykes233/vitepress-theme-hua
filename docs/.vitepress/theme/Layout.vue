<script setup lang="ts">
import { useData } from 'vitepress'
import NavBar from './components/NavBar.vue'
import MyLayout from './components/MyLayout.vue'
import PostList from './components/PostList.vue'
import PostContent from './components/PostContent.vue'
import ToolBar from './components/ToolBar.vue'

const { frontmatter } = useData()
</script>

<template>
    <MyLayout>
        <template #header>
            <div class="header">
                <NavBar />
            </div>
        </template>
        <template #content>
            <div class="content">
                <div v-if="frontmatter.layout == 'post' || frontmatter.layout == 'about'">
                    <PostContent> </PostContent>
                    <ToolBar></ToolBar>
                </div>
                <div v-else-if="frontmatter.layout == 'home'">
                    <PostList></PostList>
                    
                </div>
                <div v-else>
                    <h1 class="not_found">404 not found!</h1>
                    <h2 class="not_found">输错网址了吧？୧[ * ಡ ▽ ಡ * ]୨</h2>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="footer">Powered by <a href="http://lijunhua.cn">Hua</a> © 2023</div>
        </template>
    </MyLayout>
</template>
<style scoped>
.content {
    min-height: 100%;
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 6rem;
}

.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    max-height: 5rem;
    color: var(--color-text-1);
}

.footer a{
    color: var(--color-text-1);
}

.not_found{
    color: var(--color-text-1);;
}

</style>
