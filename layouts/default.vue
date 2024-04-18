<template>
    <div class="flex flex-col h-screen">
        <AppHeader />

        <div class="flex-1 z-0 relative block mx-6 my-4">
            <slot />
        </div>

        <AppFooter />
    </div>
</template>