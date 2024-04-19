<template>
    <div>
        <!-- 导航栏 -->
        <div class="tabs tabs-bordered">
            <NuxtLink to="./info" class="tab">比赛信息</NuxtLink>
            <NuxtLink to="./problems" class="tab">题目列表</NuxtLink>
        </div>

        <div class="card shadow-lg">
            <div class="card-body">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import renderMathInElement from 'katex/contrib/auto-render/auto-render.js';
import 'katex/dist/katex.min.css';
import markdownIt from 'markdown-it';
import { useRoute } from "vue-router";
import type { OJContest } from "~/types/contest";

const md = new markdownIt()

const route = useRoute()
const contest_id = route.params.id

const all_contests = (await useFetch('/api/contests/manage/')).data as Ref<OJContest[]>
const contest: Ref<OJContest> = ref(all_contests.value.filter(x => x.contest_id == contest_id)[0])

onMounted(() => {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ]
    })
})
</script>

<style scoped>
.router-link-active {
    @apply tab-active;
}
</style>