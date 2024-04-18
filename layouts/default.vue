<template>
    <div class="h-screen">
        <div class="h-screen flex flex-col">
            <AppHeader />

            <div class="flex-1 z-0 relative block mx-6 my-4">
                <slot />
            </div>
        </div>

        <AppFooter />

        <WaterMark />
    </div>
</template>