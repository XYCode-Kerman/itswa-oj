<template>
    <div class="min-w-16 min-h-16 rounded-md text-white flex justify-center items-center relative" :class="{
        'bg-green-500': result.status == 'AC',
        'bg-red-500': result.status == 'WA',
        'bg-yellow-500': result.status == 'CE',
        'bg-purple-500': result.status == 'RE',
        'bg-orange-500': result.status == 'TLE',
        'bg-emerald-800': result.status == 'MLE',
        'bg-lime-900': result.status == 'OLE',
        'bg-black': result.status == 'JIE'
    }">
        <!-- 测试点编号 -->
        <div class="absolute left-1 top-1 text-xs font-thin">#{{ index }}</div>

        <!-- 测试点状态 -->
        <div class="text-2xl">{{ result.status }}</div>

        <!-- 时间 -->
        <div class="absolute left-[4px] bottom-[2px] text-[0.6rem] font-thin">{{ result.time * 1000 }}ms</div>
    </div>
</template>

<script setup lang="ts">
import type { CheckPointResult } from '~/types/judging_result';


const props = defineProps<{
    result: CheckPointResult,
    index: number
}>();
</script>