<script setup>
const title = "TODO List";


</script>

<template>
    <div>
        <h1 class="title flex gap-10">{{ title }}
            <nav class>
            <ul class="flex gap-3">
                <li>
                    <router-link to="/" class="text-xl underline">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="text-xl underline">About</router-link>
                </li>
                <li>
                    <router-link to="/privacy" class="text-xl underline">Privacy</router-link>
                </li>
            </ul>
        </nav>
    </h1>
    </div>
    
    <div class="divider"></div>

    <main>
        <router-view></router-view>
    </main>
</template>

<style scoped>
.title {
    @apply main-font gradient-bg text-white text-5xl;
}

.main-font {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 4px;
    font-family: Arial, sans-serif;
}

.gradient-bg {
    background-image: linear-gradient(to left, #ffffff, #006895);
}
</style>