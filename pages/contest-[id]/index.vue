<template>
    <div>
        <div class="card shadow-lg">
            <div class="card-body grid grid-cols-4">
                <div class="card-title col-span-full text-3xl">比赛 {{ contest.name }}</div>

                <!-- 简介 -->
                <div class="col-span-3 card card-bordered p-5 max-w-none prose prose-sm md:prose-base"
                    v-html="md.render(contest.description)">
                </div>

                <!-- 比赛信息 -->
                <div class="flex flex-row w-full">
                    <!-- 基础信息 -->
                    <div class="card card-bordered p-2 w-full">
                        <table class="table">
                            <tbody>
                                <!-- 比赛编号 -->
                                <tr>
                                    <td>比赛编号</td>
                                    <td class="tooltip" :data-tip="contest.contest_id">{{
                                        contest.contest_id.substring(0, 8)
                                        }}...</td>
                                </tr>

                                <!-- 开始时间 -->
                                <tr>
                                    <td>开始于</td>
                                    <td>{{ new Date(contest.start_time).toLocaleString() }}</td>
                                </tr>

                                <!-- 结束时间 -->
                                <tr>
                                    <td>结束于</td>
                                    <td>{{ new Date(contest.end_time).toLocaleString() }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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