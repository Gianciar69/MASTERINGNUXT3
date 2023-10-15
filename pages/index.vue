<template>
<NuxtLink class="underline font-medium" :to="firstLesson.path"> go to first first lesson

</NuxtLink>

</template>

<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>
