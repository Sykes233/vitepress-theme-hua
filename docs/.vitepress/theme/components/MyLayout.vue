<template>
    <Layout>
        <LayoutHeader>
            <slot name="header"></slot>
        </LayoutHeader>
        <LayoutContent>
            <slot name="content"></slot>
        </LayoutContent>
        <LayoutFooter>
            <slot name="footer"></slot>
        </LayoutFooter>
    </Layout>
</template>

<script setup>
import { LayoutHeader, Layout, LayoutContent, LayoutFooter } from '@arco-design/web-vue'
</script>
