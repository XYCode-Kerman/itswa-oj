<template>
    <div>
        <div v-if="new Date(contest.start_time) < new Date()" class="flex flex-col gap-4">
            <!-- 题目信息 -->
            <Problem v-for="problem in problems" :key="problem.problem_id" :problem="problem" />
        </div>

        <div v-else>
            <marquee behavior="" direction="">请等待比赛开始</marquee>
        </div>
    </div>
</template>

<script setup lang="ts">
import markdownIt from 'markdown-it';
import { useRoute } from "vue-router";
import type { OJContest, OJProblem } from "~/types/contest";

const md = new markdownIt()

const route = useRoute()
const contest_id = route.params.id

const all_contests = (await useFetch('/api/contests/manage/')).data as Ref<OJContest[]>
const contest: Ref<OJContest> = ref(all_contests.value.filter(x => x.contest_id == contest_id)[0])
const problems: Ref<OJProblem[]> = ref([])

if (new Date(contest.value.start_time) < new Date()) {
    problems.value = (await useFetch(`/api/contests/detail/${contest_id}/problems`)).data.value as OJProblem[]
}
</script>