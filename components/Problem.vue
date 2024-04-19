<template>
    <div class="collapse collapse-arrow border border-base-300">
        <input type="checkbox">

        <div class="collapse-title text-lg font-bold">
            {{ problem.name }}
        </div>

        <div class="collapse-content prose max-w-none">
            <div class="divider">题目背景</div>
            <div class="border px-4 rounded-lg" v-html="md.render(problem.background || '无题目背景')"></div>

            <div class="divider">题目描述</div>
            <div class="border px-4 rounded-lg" v-html="md.render(problem.description)"></div>

            <div class="divider">输入格式</div>
            <div class="border px-4 rounded-lg" v-html="md.render(problem.input_format)"></div>

            <div class="divider">输出格式</div>
            <div class="border px-4 rounded-lg" v-html="md.render(problem.output_format)"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import markdownIt from 'markdown-it';
import { defineProps, type PropType } from 'vue';
import type { OJProblem } from '~/types/contest';

const md = new markdownIt()

const props = defineProps({
    problem: {
        type: Object as PropType<OJProblem>,
        required: true,
    }
})

const problem = props.problem
</script>