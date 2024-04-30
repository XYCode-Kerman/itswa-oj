<template>
    <div class="collapse collapse-arrow border border-base-300">
        <input type="checkbox">

        <div class="collapse-title text-lg font-bold">
            {{ problem.name }}
        </div>

        <div class="collapse-content prose max-w-none">
            <div class="grid grid-cols-4">
                <div @click="show_code_editor = !show_code_editor"
                    class="btn btn-info link link-hover no-underline text-base font-bold">
                    <span v-if="show_code_editor == false">显示代码编辑器</span>
                    <span v-if="show_code_editor == true">关闭代码编辑器</span>
                </div>
            </div>

            <CodeEditor class="my-4" :problem_id="problem.problem_id" :contest_id="contest_id" v-if="show_code_editor">
            </CodeEditor>

            <div class="my-2"></div>

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
const show_code_editor = ref(false)

const props = defineProps({
    problem: {
        type: Object as PropType<OJProblem>,
        required: true,
    },
    contest_id: {
        type: String,
        required: true
    }
})

const problem = props.problem
const contest_id = props.contest_id
</script>