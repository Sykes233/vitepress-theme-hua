<template>
    <div class="list">
        <h1>文章列表</h1>
        <a-space direction="vertical" size="medium" class="posts" fill>
            <template v-for="post in posts">
                <template v-if="post.frontmatter.layout == 'post'">
                    <div class="one-post">
                        <a-space size="small" class="time"
                            ><i class="bi bi-calendar3"></i
                            ><span>{{ dayjs(post.frontmatter.mtime).format('YYYY-MM-DD')  }}</span></a-space
                        >
                        <a :href="post.url" class="title">{{ post.frontmatter.title }}</a>
                    </div>
                </template>
            </template>
        </a-space>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    color: var(--color-neutral-10);
}
.list {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-2);
    transition: 0.5s;
    border-radius: 20px;
}
.list:hover {
    background-color: var(--color-neutral-2);
}

.posts {
    margin: 0 1rem 1rem;
}
.time {
    color: var(--color-neutral-10);
    font-size: 1.2rem;
    flex-shrink: 0;
}
.title {
    text-decoration: none;
    color: var(--color-neutral-10);
    font-size: 1.2rem;
}

.one-post {
    display: flex;
    column-gap: 1rem;
}
</style>
<script setup>
import { data as posts } from '../../posts.data.js'
import dayjs from 'dayjs'
let comparer = (a, b) => {
    if(dayjs(a.frontmatter.mtime).isBefore(dayjs(b.frontmatter.mtime))) {
        return 1
    } else {
        return -1
    }
}
posts.sort(comparer)
</script>
