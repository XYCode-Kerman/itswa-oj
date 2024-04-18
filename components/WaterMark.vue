<template>
    <div v-if="!hidden" @click="hidden = !hidden"
        class="fixed right-0 bottom-0 w-1/5 text-[0.6rem] text-right opacity-45 select-none z-50 tooltip tooltip-left cursor-pointer"
        data-tip="点击以隐藏">
        <!-- 许可证声明 -->
        <div>
            <p>ItsWA Online Judge 是 ItsWA 的一部分。</p>

            <p>ItsWA 是自由软件：你可以再分发之和/或依照由自由软件基金会发布的 GNU 通用公共许可证修改之，无论是版本 3 许可证，还是（按你的决定）任何以后版都可以。</p>

            <p>发布 ItsWA 是希望它能有用，但是并无保障;甚至连可销售和符合某个特定的目的都不保证。请参看 GNU 通用公共许可证，了解详情。</p>

            <p>你应该随程序获得一份 GNU 通用公共许可证的复本。如果没有，请看 <a href="https://www.gnu.org/licenses/"
                    class="link">https://www.gnu.org/licenses/</a>。 </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const hidden = ref(false)
</script>