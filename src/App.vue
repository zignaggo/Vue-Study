<script setup lang="ts">
import Header from "@/layouts/header/Header.vue"
</script>

<template>
	<div class="flex w-screen min-h-screen flex-col items-center">
		<Header />
		<RouterView />
	</div>
</template>

<style scoped></style>
