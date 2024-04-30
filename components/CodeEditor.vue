<template>
    <div>
        <div class="join">
            <button @click="submit" class="btn join-item">提交</button>
            <!-- <button @click="$router.back()" class="btn btn-accent join-item">返回</button> -->
        </div>

        <!-- 评测结果 -->
        <div class="divider">评测</div>

        <div class="flex flex-wrap gap-2 items-center justify-items-center">
            <CKPTStatusPanel class="h-24 w-24" v-for="item, index in judging_results" :index="index + 1"
                :result="item" />
        </div>

        <!-- 代码 -->
        <div class="divider">代码</div>

        <ClientOnly>
            <prism-editor class="editor shadow-xl rounded-md transform-gpu" v-model="code" :highlight="highlighter"
                line-numbers></prism-editor>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">

import Prism from 'prismjs';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { type CheckPointResult } from '~/types/judging_result';

import 'prismjs/components/prism-c';
import 'prismjs/themes/prism-tomorrow.css';

const props = defineProps({
    contest_id: {
        type: String,
        required: true
    },
    problem_id: {
        type: String,
        required: true
    }
})
const contest_id: string = props.contest_id
const problem_id: string = props.problem_id
const judging_results: Ref<CheckPointResult[]> = ref([])

let code = defineModel({
    default: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
    return 0;
}` })

function highlighter(code: string) {
    console.log(Prism.languages)
    return Prism.highlight(code, Prism.languages.c, 'c')
}

async function submit() {
    const resp = await useFetch(`/api/contests/judge/submit?contest_id=${contest_id}&problem_id=${problem_id}`, {
        method: 'POST',
        body: code,
        headers: {
            'Content-Type': 'text/plain'
        }
    })

    judging_results.value = resp.data.value as CheckPointResult[]
}
</script>

<style scoped>
.editor {
    @apply bg-base-300 font-code px-3 py-2
}
</style>