<template>
    <div class="grid grid-cols-2 gap-2">
        <NuxtLink :to="`/contest-${contest.contest_id}`" v-for="contest, index in contests" :key="contest.contest_id"
            class="card card-bordered" :class="{
                'bg-success': new Date(contest.start_time) <= new Date() && new Date() <= new Date(contest.end_time),
                'bg-warning': new Date(contest.start_time) > new Date()
            }">
            <div class="card-body">

                <div class="card-title tooltip text-left" data-tip="忘记在后端里加上 name 字段了，后面加。暂时先用index代替一下。">
                    比赛 {{ contest.name }}

                    <span
                        v-if="new Date(contest.start_time) <= new Date() && new Date() <= new Date(contest.end_time)">（进行中）</span>

                    <span v-if="new Date(contest.start_time) > new Date()">（准备中）</span>
                    <span v-if="new Date(contest.end_time) < new Date()">（已结束）</span>
                </div>

                <div>
                    <p>开始时间（UTC）：{{ contest.start_time }}</p>
                    <p>结束时间（UTC）：{{ contest.end_time }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { type Ref } from 'vue';
import { type OJContest } from '~/types/contest';
const contests = (await useFetch('/api/contests/manage/')).data as Ref<OJContest[]>
</script>